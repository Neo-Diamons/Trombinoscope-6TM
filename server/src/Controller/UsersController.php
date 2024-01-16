<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\Users;
use App\Repository\UsersRepository;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

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

    #[Route('/api/v1/user', name: 'user_show')]
    public function show(UsersRepository $UsersRepository, Request $request): JsonResponse
    {
        if ($user == null)
            return $this->json([
                'error' => 'username not found'
            ], 404);
        $user = $UsersRepository->findOneByName($request->get('username'));
        if ($user == null)
            return $this->json([
                'error' => 'username not found'
            ], 404);

        $user = $user->toJson($user);

        return $this->json($user);
    }

    #[Route('/api/v1/user/create', name: 'user_create')]
    public function create(UsersRepository $UsersRepository, Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        if ($request->get('username') == null || $request->get('password') == null)
            return $this->json([
                'error' => 'username or password is null'
            ], 400);
        if ($UsersRepository->findOneByName($request->get('username')) != null)
            return $this->json([
                'error' => 'username already exist'
            ], 409);

        $user = new Users();
        $user->setUsername($request->get('username'));
        $user->setPassword(password_hash($request->get('password'), PASSWORD_DEFAULT));

        $entityManager->persist($user);
        $entityManager->flush();

        $user = $UsersRepository->findOneByName($request->get('username'));
        $user = $user->toJson($user);

        return $this->json($user);
    }

    #[Route('/api/v1/user/login', name: 'user_login')]
    public function login(UsersRepository $UsersRepository, Request $request): JsonResponse
    {
        if ($request->get('username') == null || $request->get('password') == null)
            return $this->json([
                'error' => 'username or password is null'
            ], 400);
        if ($UsersRepository->findOneByName($request->get('username')) == null)
            return $this->json([
                'error' => 'username not found'
            ], 404);

        $user = $UsersRepository->findOneByName($request->get('username'));
        if ($user == null)
            return $this->json([
                'error' => 'username not found'
            ], 404);

        if (!password_verify($request->get('password'), $user->getPassword()))
            return $this->json([
                'error' => 'password is incorrect'
            ], 401);

        $user = $user->toJson($user);
        return $this->json($user);
    }
}
