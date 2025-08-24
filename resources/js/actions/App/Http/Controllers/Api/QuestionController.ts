import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\QuestionController::show
 * @see app/Http/Controllers/Api/QuestionController.php:38
 * @route '/api/questions/{question}'
 */
export const show = (args: { question: number | { id: number } } | [question: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/questions/{question}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\QuestionController::show
 * @see app/Http/Controllers/Api/QuestionController.php:38
 * @route '/api/questions/{question}'
 */
show.url = (args: { question: number | { id: number } } | [question: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { question: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { question: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    question: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        question: typeof args.question === 'object'
                ? args.question.id
                : args.question,
                }

    return show.definition.url
            .replace('{question}', parsedArgs.question.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QuestionController::show
 * @see app/Http/Controllers/Api/QuestionController.php:38
 * @route '/api/questions/{question}'
 */
show.get = (args: { question: number | { id: number } } | [question: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\QuestionController::show
 * @see app/Http/Controllers/Api/QuestionController.php:38
 * @route '/api/questions/{question}'
 */
show.head = (args: { question: number | { id: number } } | [question: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})
const QuestionController = { show }

export default QuestionController