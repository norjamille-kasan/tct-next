import { SubmissionStatus } from '@/lib/constants';

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
    question_version: number;
}

export interface Question {
    id: number;
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;
    task_id: number;
    message: string;
    field_type: string;
    position: number;
    options: string[] | null;
    valid_input: string;
    required: boolean;
}

export interface Submission {
    id: number;
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;
    ref_id: string;
    task_id: number;
    total_minutes_spent: number;
    status: SubmissionStatus;
    task_original_value: Task;
    started_at: string | null;
    initial_submission_at: string | null;
    final_submission_at: string | null;
    last_paused_at: string | null;
    last_resumed_at: string | null;
    last_edited_at: string | null;
    is_locked: boolean;
    question_version: number;
}
