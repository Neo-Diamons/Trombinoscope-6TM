<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use App\Repository\PeoplesRepository;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class PeoplesController extends AbstractController
{
    #[Route("/api/peoples", name: "peoples", methods: ["GET"])]
    public function showAll(PeoplesRepository $peoplesRepository): JsonResponse
    {
        set_time_limit(3600);

        $peoples = $peoplesRepository->findAll();
        $peoples = array_map(function($people) {
            return $people->toJson();
        }, $peoples);
        
        return new JsonResponse($peoples);
    }

    #[Route("/api/people/{id}", name: "people", methods: ["GET"])]
    public function index(PeoplesRepository $peoplesRepository, int $id): JsonResponse
    {
        $people = $peoplesRepository->findOneById($id);
        if ($people == null)
            return new JsonResponse([
                "error" => "id not found"
            ], 404);

        return new JsonResponse($people->toJson());
    }

    #[Route("/api/people/{id}", name: "people_update", methods: ["PATCH"])]
    public function update(PeoplesRepository $peoplesRepository, EntityManagerInterface $entityManager, Request $request, int $id): JsonResponse
    {
        $parameters = json_decode($request->getContent(), true);

        if ($parameters == null)
            return new JsonResponse([
                "error" => "parameters is null"
            ], 400);
        if ($parameters["job"] == null
            && $parameters["equip"] == null
            && $parameters["agency"] == null
            && $parameters["photo_fun_url"] == null
            && $parameters["photo_pro_url"] == null)
            return new JsonResponse([
                "error" => "job, equip, agency, photo_fun_url and photo_pro_url is null"
            ], 400);

        $people = $peoplesRepository->findOneById($id);
        if ($people == null)
            return new JsonResponse([
                "error" => "id not found"
            ], 404);

        if ($parameters["job"] != null)
            $people->setJob($parameters["job"]);
        if ($parameters["equip"] != null)
            $people->setEquip($parameters["equip"]);
        if ($parameters["agency"] != null)
            $people->setAgency($parameters["agency"]);
        if ($parameters["photo_fun_url"] != null)
            $people->setPhotoFunUrl($parameters["photo_fun_url"]);
        if ($parameters["photo_pro_url"] != null)
            $people->setPhotoProUrl($parameters["photo_pro_url"]);

        $entityManager->persist($people);
        $entityManager->flush();

        return new JsonResponse($people->toJson());
    }

    #[Route("/api/people/{id}", name: "people_delete", methods: ["DELETE"])]
    public function delete(PeoplesRepository $peoplesRepository, EntityManagerInterface $entityManager, int $id): JsonResponse
    {
        $people = $peoplesRepository->findOneById($id);
        if ($people == null)
            return new JsonResponse([
                "error" => "id not found"
            ], 404);

        $entityManager->remove($people);
        $entityManager->flush();

        return new JsonResponse([
            "success" => "people deleted"
        ]);
    }
}
