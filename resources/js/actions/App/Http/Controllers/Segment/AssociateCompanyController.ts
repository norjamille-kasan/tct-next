import { queryParams, type QueryParams } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Segment\AssociateCompanyController::__invoke
 * @see app/Http/Controllers/Segment/AssociateCompanyController.php:14
 * @route '/dashboard/segments/{segment}/attach-company'
 */
const AssociateCompanyController = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: AssociateCompanyController.url(args, options),
    method: 'post',
})

AssociateCompanyController.definition = {
    methods: ['post'],
    url: '/dashboard/segments/{segment}/attach-company',
}

/**
* @see \App\Http\Controllers\Segment\AssociateCompanyController::__invoke
 * @see app/Http/Controllers/Segment/AssociateCompanyController.php:14
 * @route '/dashboard/segments/{segment}/attach-company'
 */
AssociateCompanyController.url = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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
* @see \App\Http\Controllers\Segment\AssociateCompanyController::__invoke
 * @see app/Http/Controllers/Segment/AssociateCompanyController.php:14
 * @route '/dashboard/segments/{segment}/attach-company'
 */
AssociateCompanyController.post = (args: { segment: number | { id: number } } | [segment: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: AssociateCompanyController.url(args, options),
    method: 'post',
})
export default AssociateCompanyController