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
        if ($request->get("job") == null
            && $request->get("equip") == null
            && $request->get("agency") == null
            && $request->get("photo_fun_url") == null
            && $request->get("photo_pro_url") == null)
            return new JsonResponse([
                "error" => "job, equip, agency, photo_fun_url and photo_pro_url is null"
            ], 400);

        $people = $peoplesRepository->findOneById($id);
        if ($people == null)
            return new JsonResponse([
                "error" => "id not found"
            ], 404);

        if ($request->get("job"))
            $people->setJob($request->get("job"));
        if ($request->get("equip"))
            $people->setEquip($request->get("equip"));
        if ($request->get("agency"))
            $people->setAgency($request->get("agency"));
        if ($request->get("photo_fun_url"))
            $people->setPhotoFunUrl($request->get("photo_fun_url"));
        if ($request->get("photo_pro_url"))
            $people->setPhotoProUrl($request->get("photo_pro_url"));

        $entityManager->persist($people);
        $entityManager->flush();

        return new JsonResponse($people->toJson());
    }
}
