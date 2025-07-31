import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MyTaskController::__invoke
 * @see app/Http/Controllers/MyTaskController.php:13
 * @route '/dashboard/my-tasks'
 */
const MyTaskController = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: MyTaskController.url(options),
    method: 'get',
})

MyTaskController.definition = {
    methods: ['get','head'],
    url: '/dashboard/my-tasks',
}

/**
* @see \App\Http\Controllers\MyTaskController::__invoke
 * @see app/Http/Controllers/MyTaskController.php:13
 * @route '/dashboard/my-tasks'
 */
MyTaskController.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return MyTaskController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MyTaskController::__invoke
 * @see app/Http/Controllers/MyTaskController.php:13
 * @route '/dashboard/my-tasks'
 */
MyTaskController.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: MyTaskController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MyTaskController::__invoke
 * @see app/Http/Controllers/MyTaskController.php:13
 * @route '/dashboard/my-tasks'
 */
MyTaskController.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: MyTaskController.url(options),
    method: 'head',
})
export default MyTaskController