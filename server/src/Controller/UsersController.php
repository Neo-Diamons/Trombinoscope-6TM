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
    #[Route("/api/users", name: "users", methods: ["GET"])]
    public function showAll(UsersRepository $UsersRepository): JsonResponse
    {
        $users = $UsersRepository->findAll();
        $users = array_map(function($user) {
            return $user->toJson();
        }, $users);
        
        return new JsonResponse($users);
    }

    #[Route("/api/user/{id}", name: "user", methods: ["GET"])]
    public function index(UsersRepository $UsersRepository, int $id): JsonResponse
    {
        $user = $UsersRepository->findOneById($id);
        if ($user == null)
            return new JsonResponse([
                "error" => "id not found"
            ], 404);

        return new JsonResponse($user->toJson());
    }

    #[Route("/api/user/create", name: "user_create", methods: ["POST"])]
    public function create(UsersRepository $UsersRepository, Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        if ($request->get("username") == null || $request->get("password") == null)
            return new JsonResponse([
                "error" => "username or password is null"
            ], 400);
        if ($UsersRepository->findOneByName($request->get("username")) != null)
            return new JsonResponse([
                "error" => "user already exist"
            ], 409);

        $user = new Users();
        $user->setUsername($request->get("username"));
        $user->setPassword(password_hash($request->get("password"), PASSWORD_DEFAULT));

        $entityManager->persist($user);
        $entityManager->flush();

        $user = $UsersRepository->findOneByName($request->get("username"));
        return new JsonResponse($user->toJson());
    }

    #[Route("/api/login", name: "login", methods: ["POST"])]
    public function login(UsersRepository $UsersRepository, Request $request): JsonResponse
    {
        if ($request->get("username") == null || $request->get("password") == null)
            return new JsonResponse([
                "error" => "username or password is null"
            ], 400);
        $user = $UsersRepository->findOneByName($request->get("username"));
        if ($user == null)
            return new JsonResponse([
                "error" => "No user found"
            ], 404);

        if (!password_verify($request->get("password"), $user->getPassword()))
            return new JsonResponse([
                "error" => "password is incorrect"
            ], 401);

        return new JsonResponse(null, 200);
    }
}
