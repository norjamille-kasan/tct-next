import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmitSubmissionController::__invoke
 * @see app/Http/Controllers/Dashboard/Submissions/SubmitSubmissionController.php:16
 * @route '/dashboard/submissions/{submission}/submit'
 */
const SubmitSubmissionController = (args: { submission: number | { id: number } } | [submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: SubmitSubmissionController.url(args, options),
    method: 'put',
})

SubmitSubmissionController.definition = {
    methods: ["put"],
    url: '/dashboard/submissions/{submission}/submit',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmitSubmissionController::__invoke
 * @see app/Http/Controllers/Dashboard/Submissions/SubmitSubmissionController.php:16
 * @route '/dashboard/submissions/{submission}/submit'
 */
SubmitSubmissionController.url = (args: { submission: number | { id: number } } | [submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return SubmitSubmissionController.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmitSubmissionController::__invoke
 * @see app/Http/Controllers/Dashboard/Submissions/SubmitSubmissionController.php:16
 * @route '/dashboard/submissions/{submission}/submit'
 */
SubmitSubmissionController.put = (args: { submission: number | { id: number } } | [submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: SubmitSubmissionController.url(args, options),
    method: 'put',
})
export default SubmitSubmissionController