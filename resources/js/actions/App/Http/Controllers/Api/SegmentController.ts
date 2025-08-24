import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\SegmentController::index
 * @see app/Http/Controllers/Api/SegmentController.php:16
 * @route '/api/segments'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/segments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SegmentController::index
 * @see app/Http/Controllers/Api/SegmentController.php:16
 * @route '/api/segments'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SegmentController::index
 * @see app/Http/Controllers/Api/SegmentController.php:16
 * @route '/api/segments'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SegmentController::index
 * @see app/Http/Controllers/Api/SegmentController.php:16
 * @route '/api/segments'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\SegmentController::show
 * @see app/Http/Controllers/Api/SegmentController.php:44
 * @route '/api/segments/{segment}'
 */
export const show = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/segments/{segment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SegmentController::show
 * @see app/Http/Controllers/Api/SegmentController.php:44
 * @route '/api/segments/{segment}'
 */
show.url = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { segment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { segment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    segment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        segment: typeof args.segment === 'object'
                ? args.segment.id
                : args.segment,
                }

    return show.definition.url
            .replace('{segment}', parsedArgs.segment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SegmentController::show
 * @see app/Http/Controllers/Api/SegmentController.php:44
 * @route '/api/segments/{segment}'
 */
show.get = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SegmentController::show
 * @see app/Http/Controllers/Api/SegmentController.php:44
 * @route '/api/segments/{segment}'
 */
show.head = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})
const SegmentController = { index, show }

export default SegmentController