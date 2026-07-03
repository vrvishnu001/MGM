import express from 'express'
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs/promises'
import fsSync from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PORT = process.env.PORT || 4000
const dataDir = path.join(__dirname, 'data')
const publicDir = path.join(__dirname, 'public')
const heroDir = path.join(publicDir, 'hero')
const serviceUploadDir = path.join(publicDir, 'uploads', 'services')
const messagesFile = path.join(dataDir, 'messages.txt')
const servicesFile = path.join(dataDir, 'services.json')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(publicDir, 'uploads')))
app.use('/hero', express.static(heroDir))

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, serviceUploadDir)
    },
    filename: (req, file, cb) => {
      const timestamp = Date.now()
      const ext = path.extname(file.originalname)
      const field = req.body.serviceKey || 'service'
      cb(null, `${field}-${timestamp}${ext}`)
    }
  })
})

const heroUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, heroDir),
    filename: (req, file, cb) => {
      const timestamp = Date.now()
      const ext = path.extname(file.originalname)
      cb(null, `hero-${timestamp}${ext}`)
    }
  })
})

async function ensureData() {
  await fs.mkdir(dataDir, { recursive: true })
  await fs.mkdir(serviceUploadDir, { recursive: true })
  await fs.mkdir(heroDir, { recursive: true })

  if (!fsSync.existsSync(messagesFile)) {
    await fs.writeFile(messagesFile, '', 'utf8')
  }

  if (!fsSync.existsSync(servicesFile)) {
    const defaultServices = {
      services: [
        {
          key: 'forklift',
          title: 'Forklift Training',
          desc: 'Comprehensive operator training covering safe load handling, stability, pre-operation checks, and industrial safety standards.',
          image: '/forklift-training.svg',
          highlights: ['Theory & Practical Sessions', 'Safety Certification', 'Hands-on Operation']
        },
        {
          key: 'excavator',
          title: 'Excavator Training',
          desc: 'Professional excavator operation training including site safety, machine controls, digging techniques, and ground conditions.',
          image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
          highlights: ['Site Safety Protocols', 'Machine Control Mastery', 'Practical Assessment']
        },
        {
          key: 'mobileCrane',
          title: 'Mobile Crane Training',
          desc: 'Expert training for mobile crane operators covering load charts, rigging, slinging, and safe lifting operations.',
          image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
          highlights: ['Load Chart Reading', 'Rigging & Slinging', 'Lift Planning']
        },
        {
          key: 'craneRental',
          title: 'Crane Rental',
          desc: 'We provide well-maintained cranes for rent for construction, industrial, and infrastructure projects across the region.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
          highlights: ['Well-maintained Fleet', 'Experienced Operators', 'Flexible Rental Terms']
        }
      ]
    }
    await fs.writeFile(servicesFile, JSON.stringify(defaultServices, null, 2), 'utf8')
  }
}

async function readServices() {
  const content = await fs.readFile(servicesFile, 'utf8')
  return JSON.parse(content)
}

async function saveServices(data) {
  await fs.writeFile(servicesFile, JSON.stringify(data, null, 2), 'utf8')
}

app.get('/api/services', async (req, res) => {
  try {
    const data = await readServices()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Unable to load services' })
  }
})

app.post('/api/service-image', upload.single('image'), async (req, res) => {
  try {
    const serviceKey = req.body.serviceKey
    const imageUrl = req.body.imageUrl
    const allowedKeys = ['forklift', 'excavator', 'mobileCrane', 'craneRental']
    if (!allowedKeys.includes(serviceKey)) {
      return res.status(400).json({ error: 'Invalid service key' })
    }

    const servicesData = await readServices()
    const service = servicesData.services.find(s => s.key === serviceKey)
    if (!service) {
      return res.status(404).json({ error: 'Service not found' })
    }

    if (imageUrl) {
      service.image = imageUrl
    }

    if (req.file) {
      service.image = `/uploads/services/${req.file.filename}`
    }

    await saveServices(servicesData)
    res.json({ service })
  } catch (error) {
    res.status(500).json({ error: 'Unable to update service image' })
  }
})

app.get('/api/hero-images', async (req, res) => {
  try {
    const names = await fs.readdir(heroDir)
    const images = names.filter(name => !name.startsWith('.')).map(name => `/hero/${name}`)
    res.json({ images })
  } catch (error) {
    res.status(500).json({ error: 'Unable to load hero images' })
  }
})

app.post('/api/hero-images', heroUpload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' })
    }
    const images = await fs.readdir(heroDir)
    res.json({ images: images.filter(name => !name.startsWith('.')).map(name => `/hero/${name}`) })
  } catch (error) {
    res.status(500).json({ error: 'Unable to upload hero image' })
  }
})

app.delete('/api/hero-images/:filename', async (req, res) => {
  try {
    const filename = req.params.filename
    const safePath = path.join(heroDir, filename)
    if (!safePath.startsWith(heroDir)) {
      return res.status(400).json({ error: 'Invalid filename' })
    }
    await fs.unlink(safePath)
    const images = await fs.readdir(heroDir)
    res.json({ images: images.filter(name => !name.startsWith('.')).map(name => `/hero/${name}`) })
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete hero image' })
  }
})

app.get('/api/messages', async (req, res) => {
  try {
    const raw = await fs.readFile(messagesFile, 'utf8')
    const messages = raw
      .split('\n---\n')
      .map((entry) => entry.trim())
      .filter(Boolean)
    res.json({ messages })
  } catch (error) {
    res.status(500).json({ error: 'Unable to load messages' })
  }
})

app.post('/api/messages', async (req, res) => {
  try {
    const message = req.body.message
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' })
    }
    const timestamp = new Date().toISOString()
    const entry = `Message saved: ${timestamp}\n${message}\n---\n`
    await fs.appendFile(messagesFile, entry, 'utf8')
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Unable to save message' })
  }
})

await ensureData()

app.listen(PORT, () => {
  console.log(`Backend API listening on http://localhost:${PORT}`)
})
