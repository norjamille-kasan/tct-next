import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\Segments\DissociateCompanyController::__invoke
 * @see app/Http/Controllers/Dashboard/Segments/DissociateCompanyController.php:15
 * @route '/dashboard/segments/{segment}/detach-company/{company}'
 */
const DissociateCompanyController = (args: { segment: number | { id: number }, company: number | { id: number } } | [segment: number | { id: number }, company: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: DissociateCompanyController.url(args, options),
    method: 'delete',
})

DissociateCompanyController.definition = {
    methods: ["delete"],
    url: '/dashboard/segments/{segment}/detach-company/{company}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Dashboard\Segments\DissociateCompanyController::__invoke
 * @see app/Http/Controllers/Dashboard/Segments/DissociateCompanyController.php:15
 * @route '/dashboard/segments/{segment}/detach-company/{company}'
 */
DissociateCompanyController.url = (args: { segment: number | { id: number }, company: number | { id: number } } | [segment: number | { id: number }, company: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    segment: args[0],
                    company: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        segment: typeof args.segment === 'object'
                ? args.segment.id
                : args.segment,
                                company: typeof args.company === 'object'
                ? args.company.id
                : args.company,
                }

    return DissociateCompanyController.definition.url
            .replace('{segment}', parsedArgs.segment.toString())
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\Segments\DissociateCompanyController::__invoke
 * @see app/Http/Controllers/Dashboard/Segments/DissociateCompanyController.php:15
 * @route '/dashboard/segments/{segment}/detach-company/{company}'
 */
DissociateCompanyController.delete = (args: { segment: number | { id: number }, company: number | { id: number } } | [segment: number | { id: number }, company: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: DissociateCompanyController.url(args, options),
    method: 'delete',
})
export default DissociateCompanyController