import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { Creative, EditorLayer, RefinementRegion } from '@/types'

type CreativeStore = {
  // State
  creatives: Creative[]
  currentCreative: Creative | null
  refinementRegions: RefinementRegion[]
  isProcessing: boolean
  error: string | null

  // Creative actions
  addCreative: (creative: Creative) => void
  updateCreative: (id: string, updates: Partial<Creative>) => void
  deleteCreative: (id: string) => void
  setCurrentCreative: (creative: Creative | null) => void
  
  // Layer actions
  addLayer: (layer: EditorLayer) => void
  updateLayer: (layerId: string, updates: Partial<EditorLayer>) => void
  deleteLayer: (layerId: string) => void
  reorderLayers: (layers: EditorLayer[]) => void
  
  // Refinement actions
  addRefinementRegion: (region: RefinementRegion) => void
  updateRefinementRegion: (regionId: string, updates: Partial<RefinementRegion>) => void
  deleteRefinementRegion: (regionId: string) => void
  clearRefinementRegions: () => void
  
  // UI actions
  setProcessing: (isProcessing: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

const initialState = {
  creatives: [],
  currentCreative: null,
  refinementRegions: [],
  isProcessing: false,
  error: null,
}

export const useCreativeStore = create<CreativeStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        // Creative actions
        addCreative: (creative) =>
          set((state) => ({
            creatives: [...state.creatives, creative],
          })),

        updateCreative: (id, updates) =>
          set((state) => {
            const creatives = state.creatives.map((c) =>
              c.id === id ? { ...c, ...updates, updatedAt: new Date() } : c
            )
            const currentCreative =
              state.currentCreative?.id === id
                ? { ...state.currentCreative, ...updates, updatedAt: new Date() }
                : state.currentCreative

            return { creatives, currentCreative }
          }),

        deleteCreative: (id) =>
          set((state) => ({
            creatives: state.creatives.filter((c) => c.id !== id),
            currentCreative:
              state.currentCreative?.id === id ? null : state.currentCreative,
          })),

        setCurrentCreative: (creative) =>
          set({ currentCreative: creative }),

        // Layer actions
        addLayer: (layer) =>
          set((state) => {
            if (!state.currentCreative) return state

            const updatedCreative = {
              ...state.currentCreative,
              layers: [...state.currentCreative.layers, layer],
              updatedAt: new Date(),
            }

            return {
              currentCreative: updatedCreative,
              creatives: state.creatives.map((c) =>
                c.id === updatedCreative.id ? updatedCreative : c
              ),
            }
          }),

        updateLayer: (layerId, updates) =>
          set((state) => {
            if (!state.currentCreative) return state

            const updatedLayers = state.currentCreative.layers.map((layer) =>
              layer.id === layerId ? { ...layer, ...updates } : layer
            )

            const updatedCreative = {
              ...state.currentCreative,
              layers: updatedLayers,
              updatedAt: new Date(),
            }

            return {
              currentCreative: updatedCreative,
              creatives: state.creatives.map((c) =>
                c.id === updatedCreative.id ? updatedCreative : c
              ),
            }
          }),

        deleteLayer: (layerId) =>
          set((state) => {
            if (!state.currentCreative) return state

            const updatedLayers = state.currentCreative.layers.filter(
              (layer) => layer.id !== layerId
            )

            const updatedCreative = {
              ...state.currentCreative,
              layers: updatedLayers,
              updatedAt: new Date(),
            }

            return {
              currentCreative: updatedCreative,
              creatives: state.creatives.map((c) =>
                c.id === updatedCreative.id ? updatedCreative : c
              ),
            }
          }),

        reorderLayers: (layers) =>
          set((state) => {
            if (!state.currentCreative) return state

            const updatedCreative = {
              ...state.currentCreative,
              layers,
              updatedAt: new Date(),
            }

            return {
              currentCreative: updatedCreative,
              creatives: state.creatives.map((c) =>
                c.id === updatedCreative.id ? updatedCreative : c
              ),
            }
          }),

        // Refinement actions
        addRefinementRegion: (region) =>
          set((state) => ({
            refinementRegions: [...state.refinementRegions, region],
          })),

        updateRefinementRegion: (regionId, updates) =>
          set((state) => ({
            refinementRegions: state.refinementRegions.map((region) =>
              region.id === regionId ? { ...region, ...updates } : region
            ),
          })),

        deleteRefinementRegion: (regionId) =>
          set((state) => ({
            refinementRegions: state.refinementRegions.filter(
              (region) => region.id !== regionId
            ),
          })),

        clearRefinementRegions: () =>
          set({ refinementRegions: [] }),

        // UI actions
        setProcessing: (isProcessing) => set({ isProcessing }),
        
        setError: (error) => set({ error }),

        reset: () => set(initialState),
      }),
      {
        name: 'creative-builder-storage',
        partialize: (state) => ({
          creatives: state.creatives,
          currentCreative: state.currentCreative,
        }),
      }
    )
  )
)
