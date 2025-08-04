import { queryParams, type QueryParams } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::index
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:14
 * @route '/dashboard/submissions'
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
    url: '/dashboard/submissions',
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::index
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:14
 * @route '/dashboard/submissions'
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::index
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:14
 * @route '/dashboard/submissions'
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::index
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:14
 * @route '/dashboard/submissions'
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::create
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:22
 * @route '/dashboard/submissions/create'
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
    url: '/dashboard/submissions/create',
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::create
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:22
 * @route '/dashboard/submissions/create'
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::create
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:22
 * @route '/dashboard/submissions/create'
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::create
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:22
 * @route '/dashboard/submissions/create'
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::store
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:30
 * @route '/dashboard/submissions'
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
    url: '/dashboard/submissions',
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::store
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:30
 * @route '/dashboard/submissions'
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::store
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:30
 * @route '/dashboard/submissions'
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::show
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:38
 * @route '/dashboard/submissions/{submission}'
 */
export const show = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/dashboard/submissions/{submission}',
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::show
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:38
 * @route '/dashboard/submissions/{submission}'
 */
show.url = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    submission: args[0],
                }
    }

    const parsedArgs = {
                        submission: args.submission,
                }

    return show.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::show
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:38
 * @route '/dashboard/submissions/{submission}'
 */
show.get = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::show
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:38
 * @route '/dashboard/submissions/{submission}'
 */
show.head = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::edit
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:46
 * @route '/dashboard/submissions/{submission}/edit'
 */
export const edit = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/dashboard/submissions/{submission}/edit',
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::edit
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:46
 * @route '/dashboard/submissions/{submission}/edit'
 */
edit.url = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    submission: args[0],
                }
    }

    const parsedArgs = {
                        submission: args.submission,
                }

    return edit.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::edit
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:46
 * @route '/dashboard/submissions/{submission}/edit'
 */
edit.get = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::edit
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:46
 * @route '/dashboard/submissions/{submission}/edit'
 */
edit.head = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::update
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:54
 * @route '/dashboard/submissions/{submission}'
 */
export const update = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/dashboard/submissions/{submission}',
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::update
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:54
 * @route '/dashboard/submissions/{submission}'
 */
update.url = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    submission: args[0],
                }
    }

    const parsedArgs = {
                        submission: args.submission,
                }

    return update.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::update
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:54
 * @route '/dashboard/submissions/{submission}'
 */
update.put = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::update
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:54
 * @route '/dashboard/submissions/{submission}'
 */
update.patch = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::destroy
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:62
 * @route '/dashboard/submissions/{submission}'
 */
export const destroy = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/dashboard/submissions/{submission}',
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::destroy
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:62
 * @route '/dashboard/submissions/{submission}'
 */
destroy.url = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    submission: args[0],
                }
    }

    const parsedArgs = {
                        submission: args.submission,
                }

    return destroy.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Submissions\SubmissionController::destroy
 * @see app/Http/Controllers/Dashboard/Submissions/SubmissionController.php:62
 * @route '/dashboard/submissions/{submission}'
 */
destroy.delete = (args: { submission: string | number } | [submission: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const SubmissionController = { index, create, store, show, edit, update, destroy }

export default SubmissionController