<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\Users;
use App\Repository\UsersRepository;

class UsersController extends AbstractController
{
    #[Route('/api/v1/users', name: 'app_users')]
    public function index(UsersRepository $UsersRepository): JsonResponse
    {
        $users = $UsersRepository->findAll();
        
        $users = array_map(function($user) {
            return $user->toJson($user);
        }, $users);
        
        return $this->json($users);
    }

    #[Route('/api/v1/user/{username}', name: 'user_show')]
    public function show(UsersRepository $UsersRepository, string $username): JsonResponse
    {
        $user = $UsersRepository->findOneByName($username);
        $user = $user->toJson($user);

        return $this->json($user);
    }
}
