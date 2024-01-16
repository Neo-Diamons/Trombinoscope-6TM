<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\Peoples;
use App\Repository\PeoplesRepository;

class PeoplesController extends AbstractController
{
    #[Route('/api/v1/peoples', name: 'app_people')]
    public function index(PeoplesRepository $peoplesRepository): JsonResponse
    {
        $peoples = $peoplesRepository->findAll();
        $peoples = array_map(function($people) {
            return $people->toJson($people);
        }, $peoples);
        
        return $this->json($peoples);
    }

    #[Route('/api/v1/people/{username}', name: 'people_show')]
    public function show(PeoplesRepository $peoplesRepository, string $username): JsonResponse
    {
        $people = $peoplesRepository->findOneByName($username);

        return $this->json($people);
    }
}
