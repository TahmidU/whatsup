<p align="center"><img src="https://github.com/TahmidU/whatsup/blob/dev/public/logo/logo_alt.png?raw=true" width="100" alt="Whatsup Logo"></p>

<h2 align="center">Whatsup</h2>

## About

A chat web application similar to WhatsApp. The goal of this project is to have the ability:

-   Chat 1-to-1 or in a group, real-time
-   Send images and videos in chats
-   Have simple account management settings
    -   Add profile pictures
    -   Name and status
    -   Basic account management

## Installation

This project uses InertiaJS which takes a monolithic approach to gluing a FE framework, such as React in this case, and Laravel. Cloning this project, and running these commands should suffice:

-   `yarn` - to install node_modules dependencies
-   `composer install` - to install laravel dependencies

MySQL and Redis database will soon be required. **(TODO)** Have a look at the `.env.example` file to configure the connection between them

## Usage

To start the project run:

-   `php artisan serve` - to start-up the BE. On MacOS, if you have [Laravel Valet](https://laravel.com/docs/10.x/valet) setup and linked to this project's directory, you wouldn't need to do this
-   `yarn dev` - to start-up the FE by having vite produce a preview for your dev environment

## Coding Standards & Architecture

This section focuses on how I went about structuring my code and my project's directories.

### FE

#### Project structure:

-   Every component will have a folder that contains:
    -   The component
    -   The style of the component
    -   `index.tsx` to export the component for cleaner imports
    -   Types, hooks, utils and contexts that are **specific** to the component
    -   Related sub-components that follow the same rules/points as above.
-   Global hooks, types, utils and contexts will be outside the `Components` folder

#### Style:

-   For styles I've used Styled-Components since it organically works well with React.

#### Design Architecture:

-   The architecture pattern that I've decided for the FE is the atomic design principle
    -   This means that components are split up as:
        -   **ATOMS**: Smallest meaningful component possible (such as a button)
        -   **MOLECULES**: Builds on ATOMS. It's a component that's not quite concrete
        -   **ORGANISMS**: Builds on MOLECULES. It's a component that's concrete and makes sense to be used directly on a page
    -   The why this design principle was used is because:
        -   It works well with React's philosophy, of splitting up elements into meaningful and organised components
        -   Stories are easier to find and components are self-defined
        -   Page components end up looking cleaner
        -   Encourages component reusability

### BE

TODO

## Merge Strategy

-   Any branch being merged into `dev` will be squashed
-   `dev` -> `master` will always be a simple merge commit. Then it'll be tags for release.

### Release

The structure the release versioning takes is: `v[major].[minor].[hotfixes/patches]`

## License

[MIT license](https://opensource.org/licenses/MIT)
