import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionStatusController::__invoke
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionStatusController.php:15
 * @route '/dashboard/submissions/{submission}/status'
 */
const SubmissionStatusController = (args: { submission: number | { id: number } } | [submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: SubmissionStatusController.url(args, options),
    method: 'put',
})

SubmissionStatusController.definition = {
    methods: ["put"],
    url: '/dashboard/submissions/{submission}/status',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionStatusController::__invoke
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionStatusController.php:15
 * @route '/dashboard/submissions/{submission}/status'
 */
SubmissionStatusController.url = (args: { submission: number | { id: number } } | [submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { submission: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    submission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        submission: typeof args.submission === 'object'
                ? args.submission.id
                : args.submission,
                }

    return SubmissionStatusController.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionStatusController::__invoke
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionStatusController.php:15
 * @route '/dashboard/submissions/{submission}/status'
 */
SubmissionStatusController.put = (args: { submission: number | { id: number } } | [submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: SubmissionStatusController.url(args, options),
    method: 'put',
})
export default SubmissionStatusController