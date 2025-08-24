import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::index
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:22
 * @route '/dashboard/submissions'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/submissions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::index
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:22
 * @route '/dashboard/submissions'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::index
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:22
 * @route '/dashboard/submissions'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::index
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:22
 * @route '/dashboard/submissions'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::create
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:34
 * @route '/dashboard/submissions/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/submissions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::create
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:34
 * @route '/dashboard/submissions/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::create
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:34
 * @route '/dashboard/submissions/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::create
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:34
 * @route '/dashboard/submissions/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::store
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:42
 * @route '/dashboard/submissions'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/submissions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::store
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:42
 * @route '/dashboard/submissions'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::store
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:42
 * @route '/dashboard/submissions'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::show
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:54
 * @route '/dashboard/submissions/{submission}'
 */
export const show = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/submissions/{submission}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::show
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:54
 * @route '/dashboard/submissions/{submission}'
 */
show.url = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    submission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        submission: args.submission,
                }

    return show.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::show
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:54
 * @route '/dashboard/submissions/{submission}'
 */
show.get = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::show
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:54
 * @route '/dashboard/submissions/{submission}'
 */
show.head = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::edit
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:62
 * @route '/dashboard/submissions/{submission}/edit'
 */
export const edit = (args: { submission: number | { id: number } } | [submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/submissions/{submission}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::edit
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:62
 * @route '/dashboard/submissions/{submission}/edit'
 */
edit.url = (args: { submission: number | { id: number } } | [submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::edit
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:62
 * @route '/dashboard/submissions/{submission}/edit'
 */
edit.get = (args: { submission: number | { id: number } } | [submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::edit
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:62
 * @route '/dashboard/submissions/{submission}/edit'
 */
edit.head = (args: { submission: number | { id: number } } | [submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::update
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:83
 * @route '/dashboard/submissions/{submission}'
 */
export const update = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/submissions/{submission}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::update
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:83
 * @route '/dashboard/submissions/{submission}'
 */
update.url = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    submission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        submission: args.submission,
                }

    return update.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::update
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:83
 * @route '/dashboard/submissions/{submission}'
 */
update.put = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::update
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:83
 * @route '/dashboard/submissions/{submission}'
 */
update.patch = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::destroy
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:91
 * @route '/dashboard/submissions/{submission}'
 */
export const destroy = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/submissions/{submission}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::destroy
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:91
 * @route '/dashboard/submissions/{submission}'
 */
destroy.url = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    submission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        submission: args.submission,
                }

    return destroy.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::destroy
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:91
 * @route '/dashboard/submissions/{submission}'
 */
destroy.delete = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const SubmissionController = { index, create, store, show, edit, update, destroy }

export default SubmissionController