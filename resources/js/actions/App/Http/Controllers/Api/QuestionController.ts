import { queryParams, type QueryParams } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\QuestionController::show
 * @see app/Http/Controllers/Api/QuestionController.php:38
 * @route '/api/questions/{question}'
 */
export const show = (args: { question: number | { id: number } } | [question: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/api/questions/{question}',
}

/**
* @see \App\Http\Controllers\Api\QuestionController::show
 * @see app/Http/Controllers/Api/QuestionController.php:38
 * @route '/api/questions/{question}'
 */
show.url = (args: { question: number | { id: number } } | [question: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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
show.get = (args: { question: number | { id: number } } | [question: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\QuestionController::show
 * @see app/Http/Controllers/Api/QuestionController.php:38
 * @route '/api/questions/{question}'
 */
show.head = (args: { question: number | { id: number } } | [question: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})
const QuestionController = { show }

export default QuestionController