<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\Peoples;
use App\Repository\PeoplesRepository;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class PeoplesController extends AbstractController
{
    #[Route('/api/v1/peoples', name: 'app_people')]
    public function index(PeoplesRepository $peoplesRepository): JsonResponse
    {
        set_time_limit(3600);

        $peoples = $peoplesRepository->findAll();
        $peoples = array_map(function($people) {
            return $people->toJson($people);
        }, $peoples);
        
        return $this->json($peoples);
    }

    #[Route('/api/v1/people', name: 'people_show')]
    public function show(PeoplesRepository $peoplesRepository, Request $request): JsonResponse
    {
        if ($request->get('name') == null || $request->get('firstname') == null)
            return $this->json([
                'error' => 'name or firstname is null'
            ], 400);

        $people = $peoplesRepository->findByKey($request->get('name'), $request->get('firstname'));
        if ($people == null)
            return $this->json([
                'error' => 'user not found'
            ], 404);

        $people = $people->toJson($people);

        return $this->json($people);
    }

    #[Route('/api/v1/people/update/job', name: 'people_update_job')]
    public function updateJob(PeoplesRepository $peoplesRepository, Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        if ($request->get('name') == null || $request->get('firstname') == null || $request->get('job') == null)
            return $this->json([
                'error' => 'name, firstname or job is null'
            ], 400);

        $people = $peoplesRepository->findByKey($request->get('name'), $request->get('firstname'));
        if ($people == null)
            return $this->json([
                'error' => 'user not found'
            ], 404);

        $people->setJob($request->get('job'));
        $entityManager->persist($people);
        $entityManager->flush();

        $people = $people->toJson($people);

        return $this->json($people);
    }

    #[Route('/api/v1/people/update/equip', name: 'people_update_equip')]
    public function updateEquip(PeoplesRepository $peoplesRepository, Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        if ($request->get('name') == null || $request->get('firstname') == null || $request->get('equip') == null)
            return $this->json([
                'error' => 'name, firstname or equip is null'
            ], 400);

        $people = $peoplesRepository->findByKey($request->get('name'), $request->get('firstname'));
        if ($people == null)
            return $this->json([
                'error' => 'user not found'
            ], 404);

        $people->setEquip($request->get('equip'));
        $entityManager->persist($people);
        $entityManager->flush();

        $people = $people->toJson($people);

        return $this->json($people);
    }

    #[Route('/api/v1/people/update/agency', name: 'people_update_agency')]
    public function updateAgency(PeoplesRepository $peoplesRepository, Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        if ($request->get('name') == null || $request->get('firstname') == null || $request->get('agency') == null)
            return $this->json([
                'error' => 'name, firstname or agency is null'
            ], 400);

        $people = $peoplesRepository->findByKey($request->get('name'), $request->get('firstname'));
        if ($people == null)
            return $this->json([
                'error' => 'user not found'
            ], 404);

        $people->setAgency($request->get('agency'));
        $entityManager->persist($people);
        $entityManager->flush();

        $people = $people->toJson($people);

        return $this->json($people);
    }

    #[Route('/api/v1/jobs', name: 'app_jobs')]
    public function jobs(PeoplesRepository $peoplesRepository): JsonResponse
    {
        $jobs = $peoplesRepository->findJobs();
        $jobs = array_map(function($job) {
            return $job['job'];
        }, $jobs);
        
        return $this->json($jobs);
    }

    #[Route('/api/v1/equips', name: 'app_equips')]
    public function equips(PeoplesRepository $peoplesRepository): JsonResponse
    {
        $equips = $peoplesRepository->findEquips();
        $equips = array_map(function($equip) {
            return $equip['equip'];
        }, $equips);
        
        return $this->json($equips);
    }

    #[Route('/api/v1/agencies', name: 'app_agencies')]
    public function agencies(PeoplesRepository $peoplesRepository): JsonResponse
    {
        $agencies = $peoplesRepository->findAgencies();
        $agencies = array_map(function($agency) {
            return $agency['agency'];
        }, $agencies);
        
        return $this->json($agencies);
    }
}
