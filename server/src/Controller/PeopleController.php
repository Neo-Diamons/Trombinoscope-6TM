<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use App\Repository\PeopleRepository;

use Doctrine\DBAL\Connection;

class PeopleController extends AbstractController
{
    #[Route('/api/v1/peoples', name: 'app_people')]
    public function index(Connection $connection): JsonResponse
    {
        $sql = "SELECT * FROM trombiDb.peoples";
        $stmt = $connection->prepare($sql);
        $result = $stmt->executeQuery();

        return $this->json($result);
    }

    #[Route('/api/v1/people/{id}', name: 'people_show')]
    public function show(Connection $connection, string $id)
    {
        $sql = "SELECT * FROM trombiDb.peoples WHERE name = :name";
        $stmt = $connection->prepare($sql);
        $stmt->bindValue('name', $id);
        $result = $stmt->executeQuery();

        return $this->json($result);
    }
}
