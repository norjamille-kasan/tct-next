import { queryParams, type QueryParams, validateParameters } from './../wayfinder'
/**
* @see \Laravel\Telescope\Http\Controllers\HomeController::telescope
 * @see vendor/laravel/telescope/src/Http/Controllers/HomeController.php:15
 * @route '/telescope/{view?}'
 */
export const telescope = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: telescope.url(args, options),
    method: 'get',
})

telescope.definition = {
    methods: ['get','head'],
    url: '/telescope/{view?}',
}

/**
* @see \Laravel\Telescope\Http\Controllers\HomeController::telescope
 * @see vendor/laravel/telescope/src/Http/Controllers/HomeController.php:15
 * @route '/telescope/{view?}'
 */
telescope.url = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { view: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    view: args[0],
                }
    }

    validateParameters(args, [
            "view",
        ])

    const parsedArgs = {
                        view: args?.view,
                }

    return telescope.definition.url
            .replace('{view?}', parsedArgs.view?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Laravel\Telescope\Http\Controllers\HomeController::telescope
 * @see vendor/laravel/telescope/src/Http/Controllers/HomeController.php:15
 * @route '/telescope/{view?}'
 */
telescope.get = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: telescope.url(args, options),
    method: 'get',
})
/**
* @see \Laravel\Telescope\Http\Controllers\HomeController::telescope
 * @see vendor/laravel/telescope/src/Http/Controllers/HomeController.php:15
 * @route '/telescope/{view?}'
 */
telescope.head = (args?: { view?: string | number } | [view: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: telescope.url(args, options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::home
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/'
 */
export const home = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ['get','head','post','put','patch','delete','options'],
    url: '/',
}

/**
* @see \Illuminate\Routing\RedirectController::home
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/'
 */
home.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::home
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/'
 */
home.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::home
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/'
 */
home.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: home.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::home
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/'
 */
home.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: home.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::home
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/'
 */
home.put = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: home.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::home
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/'
 */
home.patch = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: home.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::home
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/'
 */
home.delete = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: home.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::home
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/'
 */
home.options = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'options',
} => ({
    url: home.url(options),
    method: 'options',
})

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:13
 * @route '/dashboard'
 */
export const dashboard = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ['get','head'],
    url: '/dashboard',
}

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:13
 * @route '/dashboard'
 */
dashboard.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:13
 * @route '/dashboard'
 */
dashboard.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:13
 * @route '/dashboard'
 */
dashboard.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MyTaskController::myTasks
 * @see app/Http/Controllers/MyTaskController.php:13
 * @route '/dashboard/my-tasks'
 */
export const myTasks = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: myTasks.url(options),
    method: 'get',
})

myTasks.definition = {
    methods: ['get','head'],
    url: '/dashboard/my-tasks',
}

/**
* @see \App\Http\Controllers\MyTaskController::myTasks
 * @see app/Http/Controllers/MyTaskController.php:13
 * @route '/dashboard/my-tasks'
 */
myTasks.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return myTasks.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MyTaskController::myTasks
 * @see app/Http/Controllers/MyTaskController.php:13
 * @route '/dashboard/my-tasks'
 */
myTasks.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: myTasks.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MyTaskController::myTasks
 * @see app/Http/Controllers/MyTaskController.php:13
 * @route '/dashboard/my-tasks'
 */
myTasks.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: myTasks.url(options),
    method: 'head',
})

/**
 * @see routes/settings.php:18
 * @route '/settings/appearance'
 */
export const appearance = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: appearance.url(options),
    method: 'get',
})

appearance.definition = {
    methods: ['get','head'],
    url: '/settings/appearance',
}

/**
 * @see routes/settings.php:18
 * @route '/settings/appearance'
 */
appearance.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return appearance.definition.url + queryParams(options)
}

/**
 * @see routes/settings.php:18
 * @route '/settings/appearance'
 */
appearance.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: appearance.url(options),
    method: 'get',
})
/**
 * @see routes/settings.php:18
 * @route '/settings/appearance'
 */
appearance.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: appearance.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
export const login = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ['get','head'],
    url: '/login',
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
export const logout = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ['post'],
    url: '/logout',
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
logout.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
logout.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: logout.url(options),
    method: 'post',
})