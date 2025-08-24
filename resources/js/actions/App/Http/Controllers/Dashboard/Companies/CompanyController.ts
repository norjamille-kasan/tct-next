import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::index
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:20
 * @route '/dashboard/companies'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/companies',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::index
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:20
 * @route '/dashboard/companies'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::index
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:20
 * @route '/dashboard/companies'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::index
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:20
 * @route '/dashboard/companies'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::create
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:37
 * @route '/dashboard/companies/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/companies/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::create
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:37
 * @route '/dashboard/companies/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::create
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:37
 * @route '/dashboard/companies/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::create
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:37
 * @route '/dashboard/companies/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::store
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:45
 * @route '/dashboard/companies'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/companies',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::store
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:45
 * @route '/dashboard/companies'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::store
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:45
 * @route '/dashboard/companies'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::edit
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:72
 * @route '/dashboard/companies/{company}/edit'
 */
export const edit = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/companies/{company}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::edit
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:72
 * @route '/dashboard/companies/{company}/edit'
 */
edit.url = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    args = applyUrlDefaults(args)

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
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::edit
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:72
 * @route '/dashboard/companies/{company}/edit'
 */
edit.get = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::edit
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:72
 * @route '/dashboard/companies/{company}/edit'
 */
edit.head = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::update
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:82
 * @route '/dashboard/companies/{company}'
 */
export const update = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/companies/{company}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::update
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:82
 * @route '/dashboard/companies/{company}'
 */
update.url = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    args = applyUrlDefaults(args)

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
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::update
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:82
 * @route '/dashboard/companies/{company}'
 */
update.put = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::update
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:82
 * @route '/dashboard/companies/{company}'
 */
update.patch = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::destroy
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:96
 * @route '/dashboard/companies/{company}'
 */
export const destroy = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/companies/{company}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::destroy
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:96
 * @route '/dashboard/companies/{company}'
 */
destroy.url = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    args = applyUrlDefaults(args)

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
* @see \App\Http\Controllers\Dashboard\Companies\CompanyController::destroy
 * @see app/Http/Controllers/Dashboard/Companies/CompanyController.php:96
 * @route '/dashboard/companies/{company}'
 */
destroy.delete = (args: { company: number | { id: number } } | [company: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const CompanyController = { index, create, store, edit, update, destroy }

export default CompanyController