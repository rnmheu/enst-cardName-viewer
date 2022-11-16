export interface CardAPI {
    compliant?: string
    id: number
    rarity: number
    character_id: number
    type: number
    substat_type: number
    title: string
    name: string
    releaseDate: { jp?: Date; en?: Date }
    stats: {
        min?: { da?: number; vo?: number; pf?: number }
        max?: { da?: number; vo?: number; pf?: number }
    }
    skills: {
        center?: {
            name?: string
            effect_value?: number[]
            type_id?: number
            description?: string
            order_num?: number
        }
        live?: {
            name?: string
            type_id?: number
            duration?: number
            effect_values?: number[][]
            description?: string
            order_num?: number
            live_skill_type_name?: string
        }
        support?: {
            name?: string
            type_id?: number
            effect_values?: number[][]
            description?: string
            order_num?: number
            support_skill_type_name?: string
        }
    }
    spp: { name?: string; song_id?: number }
    items: {
        outfit: { l2d?: string | string[]; '3d'?: string | string[] }
        backgrounds: string | string[]
    }
    associated_story: string
    obtain?: { name?: string; id?: number; type?: string; subType?: string }
}

export interface Card {
    id: number
    rarity: number
    character_id: number
    type: string // Before formatting, number
    title: string
    name: string
    skills?: {
        center?: {
            name?: string
        }
        live?: {
            name?: string
        }
        support?: {
            name?: string
        }
    }
    obtain?: { name?: string; id?: number; type?: string; subType?: string }
}
