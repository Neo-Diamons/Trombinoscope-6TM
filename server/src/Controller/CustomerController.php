<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class CustomerController
{
    public function index()
    {
        return new Response(
            '<html><body>Customer Controller</body></html>'
        );
    }
}