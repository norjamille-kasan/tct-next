import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::index
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:20
 * @route '/dashboard/tasks/{task}/questions'
 */
export const index = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/tasks/{task}/questions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::index
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:20
 * @route '/dashboard/tasks/{task}/questions'
 */
index.url = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{task}', parsedArgs.task.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::index
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:20
 * @route '/dashboard/tasks/{task}/questions'
 */
index.get = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::index
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:20
 * @route '/dashboard/tasks/{task}/questions'
 */
index.head = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::create
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:32
 * @route '/dashboard/tasks/{task}/questions/create'
 */
export const create = (args: { task: string | number } | [task: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/tasks/{task}/questions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::create
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:32
 * @route '/dashboard/tasks/{task}/questions/create'
 */
create.url = (args: { task: string | number } | [task: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { task: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    task: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        task: args.task,
                }

    return create.definition.url
            .replace('{task}', parsedArgs.task.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::create
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:32
 * @route '/dashboard/tasks/{task}/questions/create'
 */
create.get = (args: { task: string | number } | [task: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::create
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:32
 * @route '/dashboard/tasks/{task}/questions/create'
 */
create.head = (args: { task: string | number } | [task: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::store
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:40
 * @route '/dashboard/tasks/{task}/questions'
 */
export const store = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/tasks/{task}/questions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::store
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:40
 * @route '/dashboard/tasks/{task}/questions'
 */
store.url = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{task}', parsedArgs.task.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::store
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:40
 * @route '/dashboard/tasks/{task}/questions'
 */
store.post = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::show
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:50
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
export const show = (args: { task: string | number, question: string | number } | [task: string | number, question: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/tasks/{task}/questions/{question}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::show
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:50
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
show.url = (args: { task: string | number, question: string | number } | [task: string | number, question: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    task: args[0],
                    question: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        task: args.task,
                                question: args.question,
                }

    return show.definition.url
            .replace('{task}', parsedArgs.task.toString())
            .replace('{question}', parsedArgs.question.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::show
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:50
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
show.get = (args: { task: string | number, question: string | number } | [task: string | number, question: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::show
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:50
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
show.head = (args: { task: string | number, question: string | number } | [task: string | number, question: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::edit
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:58
 * @route '/dashboard/tasks/{task}/questions/{question}/edit'
 */
export const edit = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/tasks/{task}/questions/{question}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::edit
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:58
 * @route '/dashboard/tasks/{task}/questions/{question}/edit'
 */
edit.url = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    task: args[0],
                    question: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        task: typeof args.task === 'object'
                ? args.task.id
                : args.task,
                                question: typeof args.question === 'object'
                ? args.question.id
                : args.question,
                }

    return edit.definition.url
            .replace('{task}', parsedArgs.task.toString())
            .replace('{question}', parsedArgs.question.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::edit
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:58
 * @route '/dashboard/tasks/{task}/questions/{question}/edit'
 */
edit.get = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::edit
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:58
 * @route '/dashboard/tasks/{task}/questions/{question}/edit'
 */
edit.head = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::update
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:71
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
export const update = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/tasks/{task}/questions/{question}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::update
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:71
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
update.url = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    task: args[0],
                    question: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        task: typeof args.task === 'object'
                ? args.task.id
                : args.task,
                                question: typeof args.question === 'object'
                ? args.question.id
                : args.question,
                }

    return update.definition.url
            .replace('{task}', parsedArgs.task.toString())
            .replace('{question}', parsedArgs.question.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::update
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:71
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
update.put = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::update
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:71
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
update.patch = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::destroy
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:81
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
export const destroy = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/tasks/{task}/questions/{question}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::destroy
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:81
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
destroy.url = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    task: args[0],
                    question: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        task: typeof args.task === 'object'
                ? args.task.id
                : args.task,
                                question: typeof args.question === 'object'
                ? args.question.id
                : args.question,
                }

    return destroy.definition.url
            .replace('{task}', parsedArgs.task.toString())
            .replace('{question}', parsedArgs.question.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::destroy
 * @see app/Http/Controllers/Dashboard/Tasks/TaskQuestionController.php:81
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
destroy.delete = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const TaskQuestionController = { index, create, store, show, edit, update, destroy }

export default TaskQuestionController