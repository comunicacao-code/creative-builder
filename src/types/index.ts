// Types para a aplicação Creative Builder

export type WorkflowType = 'generate' | 'replicate'

export type CreativeFormat = '1:1' | '9:16'

export type CreativeStatus = 
  | 'draft' 
  | 'generating' 
  | 'generated' 
  | 'editing' 
  | 'refining' 
  | 'ready' 
  | 'error'

export type Country = {
  code: string
  name: string
  flag: string
}

export type Creative = {
  id: string
  creativeId: string // ID do criativo (ex: "001")
  name: string
  country: string
  format: CreativeFormat
  url: string
  publicId?: string
  status: CreativeStatus
  workflow: WorkflowType
  referenceUrl?: string // Para replicação
  createdAt: Date
  updatedAt: Date
  refined: boolean
  layers: EditorLayer[]
}

export type EditorLayer = {
  id: string
  type: 'logo' | 'footer' | 'approval' | 'text' | 'image'
  name: string
  visible: boolean
  locked: boolean
  opacity: number
  position: { x: number; y: number }
  size?: { width: number; height: number }
  content?: string // Para text/footer
  url?: string // Para logo/image
  style?: LayerStyle
}

export type LayerStyle = {
  fontSize?: number
  fontFamily?: string
  color?: string
  backgroundColor?: string
  textAlign?: 'left' | 'center' | 'right'
}

export type RefinementRegion = {
  id: string
  type: 'fill' | 'remove'
  bounds: {
    x: number
    y: number
    width: number
    height: number
  }
  points?: { x: number; y: number }[] // Para polígonos livres
  applied: boolean
  resultUrl?: string
}

export type GenerationParams = {
  prompt: string
  country: string
  creativeId: string
  format: CreativeFormat
  negativePrompt?: string
  style?: string
}

export type ReplicationParams = {
  referenceFile: File
  originalCountry: string
  targetCountry: string
  context: string
  creativeId: string
  format: CreativeFormat
}

export type CloudinaryTransformation = {
  crop?: string
  width?: number
  height?: number
  background?: string
  effect?: string
  quality?: string | number
}

export type ExportOptions = {
  format: 'png' | 'jpg' | 'webp'
  quality: number
  includeApprovalMark: boolean
  watermark?: boolean
}

// Agent types para o sistema BMAD
export type AgentResult<T = any> = {
  success: boolean
  data?: T
  error?: string
  metadata?: Record<string, any>
}

export type AgentContext = {
  creative: Partial<Creative>
  params: GenerationParams | ReplicationParams
  previousResult?: any
}
