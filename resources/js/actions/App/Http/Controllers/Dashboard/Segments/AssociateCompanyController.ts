import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\Segments\AssociateCompanyController::__invoke
 * @see app/Http/Controllers/Dashboard/Segments/AssociateCompanyController.php:14
 * @route '/dashboard/segments/{segment}/attach-company'
 */
const AssociateCompanyController = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AssociateCompanyController.url(args, options),
    method: 'post',
})

AssociateCompanyController.definition = {
    methods: ["post"],
    url: '/dashboard/segments/{segment}/attach-company',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\Segments\AssociateCompanyController::__invoke
 * @see app/Http/Controllers/Dashboard/Segments/AssociateCompanyController.php:14
 * @route '/dashboard/segments/{segment}/attach-company'
 */
AssociateCompanyController.url = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return AssociateCompanyController.definition.url
            .replace('{segment}', parsedArgs.segment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Segments\AssociateCompanyController::__invoke
 * @see app/Http/Controllers/Dashboard/Segments/AssociateCompanyController.php:14
 * @route '/dashboard/segments/{segment}/attach-company'
 */
AssociateCompanyController.post = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AssociateCompanyController.url(args, options),
    method: 'post',
})
export default AssociateCompanyController