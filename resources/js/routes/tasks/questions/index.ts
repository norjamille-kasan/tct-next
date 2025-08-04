import { queryParams, type QueryParams } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\TaskQuestionController::index
 * @see app/Http/Controllers/TaskQuestionController.php:23
 * @route '/dashboard/tasks/{task}/questions'
 */
export const index = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '/dashboard/tasks/{task}/questions',
}

/**
* @see \App\Http\Controllers\TaskQuestionController::index
 * @see app/Http/Controllers/TaskQuestionController.php:23
 * @route '/dashboard/tasks/{task}/questions'
 */
index.url = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return index.definition.url
            .replace('{task}', parsedArgs.task.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskQuestionController::index
 * @see app/Http/Controllers/TaskQuestionController.php:23
 * @route '/dashboard/tasks/{task}/questions'
 */
index.get = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TaskQuestionController::index
 * @see app/Http/Controllers/TaskQuestionController.php:23
 * @route '/dashboard/tasks/{task}/questions'
 */
index.head = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TaskQuestionController::create
 * @see app/Http/Controllers/TaskQuestionController.php:35
 * @route '/dashboard/tasks/{task}/questions/create'
 */
export const create = (args: { task: string | number } | [task: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '/dashboard/tasks/{task}/questions/create',
}

/**
* @see \App\Http\Controllers\TaskQuestionController::create
 * @see app/Http/Controllers/TaskQuestionController.php:35
 * @route '/dashboard/tasks/{task}/questions/create'
 */
create.url = (args: { task: string | number } | [task: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { task: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    task: args[0],
                }
    }

    const parsedArgs = {
                        task: args.task,
                }

    return create.definition.url
            .replace('{task}', parsedArgs.task.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskQuestionController::create
 * @see app/Http/Controllers/TaskQuestionController.php:35
 * @route '/dashboard/tasks/{task}/questions/create'
 */
create.get = (args: { task: string | number } | [task: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TaskQuestionController::create
 * @see app/Http/Controllers/TaskQuestionController.php:35
 * @route '/dashboard/tasks/{task}/questions/create'
 */
create.head = (args: { task: string | number } | [task: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TaskQuestionController::store
 * @see app/Http/Controllers/TaskQuestionController.php:43
 * @route '/dashboard/tasks/{task}/questions'
 */
export const store = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '/dashboard/tasks/{task}/questions',
}

/**
* @see \App\Http\Controllers\TaskQuestionController::store
 * @see app/Http/Controllers/TaskQuestionController.php:43
 * @route '/dashboard/tasks/{task}/questions'
 */
store.url = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return store.definition.url
            .replace('{task}', parsedArgs.task.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TaskQuestionController::store
 * @see app/Http/Controllers/TaskQuestionController.php:43
 * @route '/dashboard/tasks/{task}/questions'
 */
store.post = (args: { task: number | { id: number } } | [task: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TaskQuestionController::show
 * @see app/Http/Controllers/TaskQuestionController.php:53
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
export const show = (args: { task: string | number, question: string | number } | [task: string | number, question: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/dashboard/tasks/{task}/questions/{question}',
}

/**
* @see \App\Http\Controllers\TaskQuestionController::show
 * @see app/Http/Controllers/TaskQuestionController.php:53
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
show.url = (args: { task: string | number, question: string | number } | [task: string | number, question: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
                    task: args[0],
                    question: args[1],
                }
    }

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
* @see \App\Http\Controllers\TaskQuestionController::show
 * @see app/Http/Controllers/TaskQuestionController.php:53
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
show.get = (args: { task: string | number, question: string | number } | [task: string | number, question: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TaskQuestionController::show
 * @see app/Http/Controllers/TaskQuestionController.php:53
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
show.head = (args: { task: string | number, question: string | number } | [task: string | number, question: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TaskQuestionController::edit
 * @see app/Http/Controllers/TaskQuestionController.php:61
 * @route '/dashboard/tasks/{task}/questions/{question}/edit'
 */
export const edit = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/dashboard/tasks/{task}/questions/{question}/edit',
}

/**
* @see \App\Http\Controllers\TaskQuestionController::edit
 * @see app/Http/Controllers/TaskQuestionController.php:61
 * @route '/dashboard/tasks/{task}/questions/{question}/edit'
 */
edit.url = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
                    task: args[0],
                    question: args[1],
                }
    }

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
* @see \App\Http\Controllers\TaskQuestionController::edit
 * @see app/Http/Controllers/TaskQuestionController.php:61
 * @route '/dashboard/tasks/{task}/questions/{question}/edit'
 */
edit.get = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TaskQuestionController::edit
 * @see app/Http/Controllers/TaskQuestionController.php:61
 * @route '/dashboard/tasks/{task}/questions/{question}/edit'
 */
edit.head = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TaskQuestionController::update
 * @see app/Http/Controllers/TaskQuestionController.php:74
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
export const update = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/dashboard/tasks/{task}/questions/{question}',
}

/**
* @see \App\Http\Controllers\TaskQuestionController::update
 * @see app/Http/Controllers/TaskQuestionController.php:74
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
update.url = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
                    task: args[0],
                    question: args[1],
                }
    }

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
* @see \App\Http\Controllers\TaskQuestionController::update
 * @see app/Http/Controllers/TaskQuestionController.php:74
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
update.put = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\TaskQuestionController::update
 * @see app/Http/Controllers/TaskQuestionController.php:74
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
update.patch = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TaskQuestionController::destroy
 * @see app/Http/Controllers/TaskQuestionController.php:84
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
export const destroy = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/dashboard/tasks/{task}/questions/{question}',
}

/**
* @see \App\Http\Controllers\TaskQuestionController::destroy
 * @see app/Http/Controllers/TaskQuestionController.php:84
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
destroy.url = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
                    task: args[0],
                    question: args[1],
                }
    }

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
* @see \App\Http\Controllers\TaskQuestionController::destroy
 * @see app/Http/Controllers/TaskQuestionController.php:84
 * @route '/dashboard/tasks/{task}/questions/{question}'
 */
destroy.delete = (args: { task: number | { id: number }, question: number | { id: number } } | [task: number | { id: number }, question: number | { id: number } ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const questions = {
    index,
create,
store,
show,
edit,
update,
destroy,
}

export default questions