export const APP_NAME = 'TCT APP';

export const WITH_OPTION_INPUT_TYPES = ['DROPDOWN_SELECT', 'SINGLE_SELECT', 'MULTI_SELECT'];

export enum SubmissionStatus {
    ONGOING = 'ONGOING',
    PAUSED = 'PAUSED',
    RESUMED = 'RESUMED',
    SUBMITTED = 'SUBMITTED',
    EDITING = 'EDITING',
    CANCELED = 'CANCELED',
}

export const getSubmissionStatusColor = {
    [SubmissionStatus.ONGOING]: 'bg-yellow-500',
    [SubmissionStatus.PAUSED]: 'bg-gray-500',
    [SubmissionStatus.RESUMED]: 'bg-gray-500',
    [SubmissionStatus.SUBMITTED]: 'bg-green-500',
    [SubmissionStatus.EDITING]: 'bg-blue-500',
    [SubmissionStatus.CANCELED]: 'bg-red-500',
};
