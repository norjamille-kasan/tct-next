export interface Role {
    id: number;
    name: string;
    guard_name: string;
    is_default: number;
    created_at: string;
    updated_at: string;
    pivot: {
        model_type: string;
        model_id: number;
        role_id: number;
    };
}

export interface Permission {
    id: number;
    name: string;
    guard_name: string;
    group: string;
    created_at: string;
    updated_at: string;
}

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

export interface Task {
    id: number;
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;
    company_id: number;
    segment_id: number;
    ref_key: string | null;
    title: string;
    description: string | null;
    computation_category: string | null;
}
