export const APP_NAME = 'TCT APP';

export const WITH_OPTION_INPUT_TYPES = ['DROPDOWN_SELECT', 'SINGLE_SELECT', 'MULTI_SELECT'];

export enum SubmissionStatus {
    ONGOING = 'ONGOING',
    PAUSED = 'PAUSED',
    SUBMITTED = 'SUBMITTED',
    CANCELED = 'CANCELED',
}

export const getSubmissionStatusColor = {
    [SubmissionStatus.ONGOING]: 'bg-yellow-500',
    [SubmissionStatus.PAUSED]: 'bg-gray-500',
    [SubmissionStatus.SUBMITTED]: 'bg-green-500',
    [SubmissionStatus.CANCELED]: 'bg-red-500',
};

export enum FieldType {
    TEXT = 'TEXT',
    LONG_TEXT = 'LONG_TEXT',
    NUMBER = 'NUMBER',
    DATE = 'DATE',
    DROPDOWN_SELECT = 'DROPDOWN_SELECT',
    SINGLE_SELECT = 'SINGLE_SELECT',
    MULTI_SELECT = 'MULTI_SELECT',
}
