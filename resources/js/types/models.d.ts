export interface Company {
    id: number;
    name: string;
    ref_key: string;
    created_at: string;
    updated_at: string;
}

export interface Segment {
    id: number;
    company_id: number;
    ref_key: string | null;
    name: string;
    description: string | null;
    color: string;
    created_at: string;
    updated_at: string;
}
