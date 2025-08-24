import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionAnswerController::update
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionAnswerController.php:56
 * @route '/dashboard/submissions/{submission}/submission-answers/{submissionAnswer}'
 */
export const update = (args: { submission: number | { id: number }, submissionAnswer: number | { id: number } } | [submission: number | { id: number }, submissionAnswer: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/submissions/{submission}/submission-answers/{submissionAnswer}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionAnswerController::update
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionAnswerController.php:56
 * @route '/dashboard/submissions/{submission}/submission-answers/{submissionAnswer}'
 */
update.url = (args: { submission: number | { id: number }, submissionAnswer: number | { id: number } } | [submission: number | { id: number }, submissionAnswer: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    submission: args[0],
                    submissionAnswer: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        submission: typeof args.submission === 'object'
                ? args.submission.id
                : args.submission,
                                submissionAnswer: typeof args.submissionAnswer === 'object'
                ? args.submissionAnswer.id
                : args.submissionAnswer,
                }

    return update.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace('{submissionAnswer}', parsedArgs.submissionAnswer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionAnswerController::update
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionAnswerController.php:56
 * @route '/dashboard/submissions/{submission}/submission-answers/{submissionAnswer}'
 */
update.put = (args: { submission: number | { id: number }, submissionAnswer: number | { id: number } } | [submission: number | { id: number }, submissionAnswer: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionAnswerController::update
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionAnswerController.php:56
 * @route '/dashboard/submissions/{submission}/submission-answers/{submissionAnswer}'
 */
update.patch = (args: { submission: number | { id: number }, submissionAnswer: number | { id: number } } | [submission: number | { id: number }, submissionAnswer: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})
const SubmissionAnswerController = { update }

export default SubmissionAnswerController