import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Laravel\Telescope\Http\Controllers\ViewsController::index
 * @see vendor/laravel/telescope/src/Http/Controllers/ViewsController.php:33
 * @route '/telescope/telescope-api/views'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index.url(options),
    method: 'post',
})

index.definition = {
    methods: ["post"],
    url: '/telescope/telescope-api/views',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Telescope\Http\Controllers\ViewsController::index
 * @see vendor/laravel/telescope/src/Http/Controllers/ViewsController.php:33
 * @route '/telescope/telescope-api/views'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Laravel\Telescope\Http\Controllers\ViewsController::index
 * @see vendor/laravel/telescope/src/Http/Controllers/ViewsController.php:33
 * @route '/telescope/telescope-api/views'
 */
index.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index.url(options),
    method: 'post',
})

/**
* @see \Laravel\Telescope\Http\Controllers\ViewsController::show
 * @see vendor/laravel/telescope/src/Http/Controllers/ViewsController.php:51
 * @route '/telescope/telescope-api/views/{telescopeEntryId}'
 */
export const show = (args: { telescopeEntryId: string | number } | [telescopeEntryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/telescope/telescope-api/views/{telescopeEntryId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Telescope\Http\Controllers\ViewsController::show
 * @see vendor/laravel/telescope/src/Http/Controllers/ViewsController.php:51
 * @route '/telescope/telescope-api/views/{telescopeEntryId}'
 */
show.url = (args: { telescopeEntryId: string | number } | [telescopeEntryId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { telescopeEntryId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    telescopeEntryId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        telescopeEntryId: args.telescopeEntryId,
                }

    return show.definition.url
            .replace('{telescopeEntryId}', parsedArgs.telescopeEntryId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Laravel\Telescope\Http\Controllers\ViewsController::show
 * @see vendor/laravel/telescope/src/Http/Controllers/ViewsController.php:51
 * @route '/telescope/telescope-api/views/{telescopeEntryId}'
 */
show.get = (args: { telescopeEntryId: string | number } | [telescopeEntryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Laravel\Telescope\Http\Controllers\ViewsController::show
 * @see vendor/laravel/telescope/src/Http/Controllers/ViewsController.php:51
 * @route '/telescope/telescope-api/views/{telescopeEntryId}'
 */
show.head = (args: { telescopeEntryId: string | number } | [telescopeEntryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})
const ViewsController = { index, show }

export default ViewsController