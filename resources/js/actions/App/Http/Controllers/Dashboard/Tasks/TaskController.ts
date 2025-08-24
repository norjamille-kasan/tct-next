import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::index
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:22
 * @route '/dashboard/tasks'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/tasks',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::index
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:22
 * @route '/dashboard/tasks'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::index
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:22
 * @route '/dashboard/tasks'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::index
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:22
 * @route '/dashboard/tasks'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::create
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:51
 * @route '/dashboard/tasks/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/tasks/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::create
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:51
 * @route '/dashboard/tasks/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::create
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:51
 * @route '/dashboard/tasks/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::create
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:51
 * @route '/dashboard/tasks/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::store
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:62
 * @route '/dashboard/tasks'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/tasks',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::store
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:62
 * @route '/dashboard/tasks'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::store
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:62
 * @route '/dashboard/tasks'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::edit
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:93
 * @route '/dashboard/tasks/{task}/edit'
 */
export const edit = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/tasks/{task}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::edit
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:93
 * @route '/dashboard/tasks/{task}/edit'
 */
edit.url = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { task: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { task: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    task: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        task: typeof args.task === 'object'
                ? args.task.id
                : args.task,
                }

    return edit.definition.url
            .replace('{task}', parsedArgs.task.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::edit
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:93
 * @route '/dashboard/tasks/{task}/edit'
 */
edit.get = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::edit
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:93
 * @route '/dashboard/tasks/{task}/edit'
 */
edit.head = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::update
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:107
 * @route '/dashboard/tasks/{task}'
 */
export const update = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/tasks/{task}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::update
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:107
 * @route '/dashboard/tasks/{task}'
 */
update.url = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { task: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { task: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    task: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        task: typeof args.task === 'object'
                ? args.task.id
                : args.task,
                }

    return update.definition.url
            .replace('{task}', parsedArgs.task.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::update
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:107
 * @route '/dashboard/tasks/{task}'
 */
update.put = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::update
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:107
 * @route '/dashboard/tasks/{task}'
 */
update.patch = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::destroy
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:126
 * @route '/dashboard/tasks/{task}'
 */
export const destroy = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/tasks/{task}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::destroy
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:126
 * @route '/dashboard/tasks/{task}'
 */
destroy.url = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { task: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { task: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    task: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        task: typeof args.task === 'object'
                ? args.task.id
                : args.task,
                }

    return destroy.definition.url
            .replace('{task}', parsedArgs.task.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskController::destroy
 * @see app/Http/Controllers/Dashboard/Tasks/TaskController.php:126
 * @route '/dashboard/tasks/{task}'
 */
destroy.delete = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const TaskController = { index, create, store, edit, update, destroy }

export default TaskController