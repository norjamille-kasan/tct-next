import { queryParams, type QueryParams } from './../../wayfinder'
import questions from './questions'
/**
* @see \App\Http\Controllers\TaskController::index
 * @see app/Http/Controllers/TaskController.php:22
 * @route '/dashboard/tasks'
 */
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '/dashboard/tasks',
}

/**
* @see \App\Http\Controllers\TaskController::index
 * @see app/Http/Controllers/TaskController.php:22
 * @route '/dashboard/tasks'
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskController::index
 * @see app/Http/Controllers/TaskController.php:22
 * @route '/dashboard/tasks'
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TaskController::index
 * @see app/Http/Controllers/TaskController.php:22
 * @route '/dashboard/tasks'
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TaskController::create
 * @see app/Http/Controllers/TaskController.php:47
 * @route '/dashboard/tasks/create'
 */
export const create = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '/dashboard/tasks/create',
}

/**
* @see \App\Http\Controllers\TaskController::create
 * @see app/Http/Controllers/TaskController.php:47
 * @route '/dashboard/tasks/create'
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskController::create
 * @see app/Http/Controllers/TaskController.php:47
 * @route '/dashboard/tasks/create'
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TaskController::create
 * @see app/Http/Controllers/TaskController.php:47
 * @route '/dashboard/tasks/create'
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TaskController::store
 * @see app/Http/Controllers/TaskController.php:58
 * @route '/dashboard/tasks'
 */
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '/dashboard/tasks',
}

/**
* @see \App\Http\Controllers\TaskController::store
 * @see app/Http/Controllers/TaskController.php:58
 * @route '/dashboard/tasks'
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskController::store
 * @see app/Http/Controllers/TaskController.php:58
 * @route '/dashboard/tasks'
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TaskController::edit
 * @see app/Http/Controllers/TaskController.php:89
 * @route '/dashboard/tasks/{task}/edit'
 */
export const edit = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/dashboard/tasks/{task}/edit',
}

/**
* @see \App\Http\Controllers\TaskController::edit
 * @see app/Http/Controllers/TaskController.php:89
 * @route '/dashboard/tasks/{task}/edit'
 */
edit.url = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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
* @see \App\Http\Controllers\TaskController::edit
 * @see app/Http/Controllers/TaskController.php:89
 * @route '/dashboard/tasks/{task}/edit'
 */
edit.get = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TaskController::edit
 * @see app/Http/Controllers/TaskController.php:89
 * @route '/dashboard/tasks/{task}/edit'
 */
edit.head = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TaskController::update
 * @see app/Http/Controllers/TaskController.php:103
 * @route '/dashboard/tasks/{task}'
 */
export const update = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/dashboard/tasks/{task}',
}

/**
* @see \App\Http\Controllers\TaskController::update
 * @see app/Http/Controllers/TaskController.php:103
 * @route '/dashboard/tasks/{task}'
 */
update.url = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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
* @see \App\Http\Controllers\TaskController::update
 * @see app/Http/Controllers/TaskController.php:103
 * @route '/dashboard/tasks/{task}'
 */
update.put = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\TaskController::update
 * @see app/Http/Controllers/TaskController.php:103
 * @route '/dashboard/tasks/{task}'
 */
update.patch = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TaskController::destroy
 * @see app/Http/Controllers/TaskController.php:122
 * @route '/dashboard/tasks/{task}'
 */
export const destroy = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/dashboard/tasks/{task}',
}

/**
* @see \App\Http\Controllers\TaskController::destroy
 * @see app/Http/Controllers/TaskController.php:122
 * @route '/dashboard/tasks/{task}'
 */
destroy.url = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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
* @see \App\Http\Controllers\TaskController::destroy
 * @see app/Http/Controllers/TaskController.php:122
 * @route '/dashboard/tasks/{task}'
 */
destroy.delete = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const tasks = {
    index,
create,
store,
edit,
update,
destroy,
questions,
}

export default tasks