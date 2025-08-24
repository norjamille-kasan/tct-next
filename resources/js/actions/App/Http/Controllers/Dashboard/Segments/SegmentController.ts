import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::index
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:22
 * @route '/dashboard/segments'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/segments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::index
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:22
 * @route '/dashboard/segments'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::index
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:22
 * @route '/dashboard/segments'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::index
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:22
 * @route '/dashboard/segments'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::create
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:42
 * @route '/dashboard/segments/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/segments/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::create
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:42
 * @route '/dashboard/segments/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::create
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:42
 * @route '/dashboard/segments/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::create
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:42
 * @route '/dashboard/segments/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::store
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:50
 * @route '/dashboard/segments'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/segments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::store
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:50
 * @route '/dashboard/segments'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::store
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:50
 * @route '/dashboard/segments'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::edit
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:74
 * @route '/dashboard/segments/{segment}/edit'
 */
export const edit = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/segments/{segment}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::edit
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:74
 * @route '/dashboard/segments/{segment}/edit'
 */
edit.url = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{segment}', parsedArgs.segment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::edit
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:74
 * @route '/dashboard/segments/{segment}/edit'
 */
edit.get = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::edit
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:74
 * @route '/dashboard/segments/{segment}/edit'
 */
edit.head = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::update
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:84
 * @route '/dashboard/segments/{segment}'
 */
export const update = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/segments/{segment}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::update
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:84
 * @route '/dashboard/segments/{segment}'
 */
update.url = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{segment}', parsedArgs.segment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::update
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:84
 * @route '/dashboard/segments/{segment}'
 */
update.put = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::update
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:84
 * @route '/dashboard/segments/{segment}'
 */
update.patch = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::destroy
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:96
 * @route '/dashboard/segments/{segment}'
 */
export const destroy = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/segments/{segment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::destroy
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:96
 * @route '/dashboard/segments/{segment}'
 */
destroy.url = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{segment}', parsedArgs.segment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Segments\SegmentController::destroy
 * @see app/Http/Controllers/Dashboard/Segments/SegmentController.php:96
 * @route '/dashboard/segments/{segment}'
 */
destroy.delete = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const SegmentController = { index, create, store, edit, update, destroy }

export default SegmentController