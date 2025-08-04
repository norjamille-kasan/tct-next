import { queryParams, type QueryParams } from './../../wayfinder'
/**
* @see \App\Http\Controllers\CompanyController::index
 * @see app/Http/Controllers/CompanyController.php:19
 * @route '/dashboard/companies'
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
    url: '/dashboard/companies',
}

/**
* @see \App\Http\Controllers\CompanyController::index
 * @see app/Http/Controllers/CompanyController.php:19
 * @route '/dashboard/companies'
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyController::index
 * @see app/Http/Controllers/CompanyController.php:19
 * @route '/dashboard/companies'
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CompanyController::index
 * @see app/Http/Controllers/CompanyController.php:19
 * @route '/dashboard/companies'
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CompanyController::create
 * @see app/Http/Controllers/CompanyController.php:36
 * @route '/dashboard/companies/create'
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
    url: '/dashboard/companies/create',
}

/**
* @see \App\Http\Controllers\CompanyController::create
 * @see app/Http/Controllers/CompanyController.php:36
 * @route '/dashboard/companies/create'
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyController::create
 * @see app/Http/Controllers/CompanyController.php:36
 * @route '/dashboard/companies/create'
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CompanyController::create
 * @see app/Http/Controllers/CompanyController.php:36
 * @route '/dashboard/companies/create'
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CompanyController::store
 * @see app/Http/Controllers/CompanyController.php:44
 * @route '/dashboard/companies'
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
    url: '/dashboard/companies',
}

/**
* @see \App\Http\Controllers\CompanyController::store
 * @see app/Http/Controllers/CompanyController.php:44
 * @route '/dashboard/companies'
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyController::store
 * @see app/Http/Controllers/CompanyController.php:44
 * @route '/dashboard/companies'
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CompanyController::edit
 * @see app/Http/Controllers/CompanyController.php:71
 * @route '/dashboard/companies/{company}/edit'
 */
export const edit = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/dashboard/companies/{company}/edit',
}

/**
* @see \App\Http\Controllers\CompanyController::edit
 * @see app/Http/Controllers/CompanyController.php:71
 * @route '/dashboard/companies/{company}/edit'
 */
edit.url = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { company: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { company: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    company: args[0],
                }
    }

    const parsedArgs = {
                        company: typeof args.company === 'object'
                ? args.company.id
                : args.company,
                }

    return edit.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyController::edit
 * @see app/Http/Controllers/CompanyController.php:71
 * @route '/dashboard/companies/{company}/edit'
 */
edit.get = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CompanyController::edit
 * @see app/Http/Controllers/CompanyController.php:71
 * @route '/dashboard/companies/{company}/edit'
 */
edit.head = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CompanyController::update
 * @see app/Http/Controllers/CompanyController.php:81
 * @route '/dashboard/companies/{company}'
 */
export const update = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/dashboard/companies/{company}',
}

/**
* @see \App\Http\Controllers\CompanyController::update
 * @see app/Http/Controllers/CompanyController.php:81
 * @route '/dashboard/companies/{company}'
 */
update.url = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { company: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { company: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    company: args[0],
                }
    }

    const parsedArgs = {
                        company: typeof args.company === 'object'
                ? args.company.id
                : args.company,
                }

    return update.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyController::update
 * @see app/Http/Controllers/CompanyController.php:81
 * @route '/dashboard/companies/{company}'
 */
update.put = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\CompanyController::update
 * @see app/Http/Controllers/CompanyController.php:81
 * @route '/dashboard/companies/{company}'
 */
update.patch = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\CompanyController::destroy
 * @see app/Http/Controllers/CompanyController.php:95
 * @route '/dashboard/companies/{company}'
 */
export const destroy = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/dashboard/companies/{company}',
}

/**
* @see \App\Http\Controllers\CompanyController::destroy
 * @see app/Http/Controllers/CompanyController.php:95
 * @route '/dashboard/companies/{company}'
 */
destroy.url = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { company: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { company: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    company: args[0],
                }
    }

    const parsedArgs = {
                        company: typeof args.company === 'object'
                ? args.company.id
                : args.company,
                }

    return destroy.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyController::destroy
 * @see app/Http/Controllers/CompanyController.php:95
 * @route '/dashboard/companies/{company}'
 */
destroy.delete = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const companies = {
    index,
create,
store,
edit,
update,
destroy,
}

export default companies