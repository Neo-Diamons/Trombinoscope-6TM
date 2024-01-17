<?php

namespace App\Repository;

use App\Entity\Peoples;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Peoples>
 *
 * @method Peoples|null find($id, $lockMode = null, $lockVersion = null)
 * @method Peoples|null findOneBy(array $criteria, array $orderBy = null)
 * @method Peoples[]    findAll()
 * @method Peoples[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PeoplesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Peoples::class);
    }

   /**
    * @return Peoples[] Returns an array of Peoples objects
    */

   public function findOneByName($name): ?Peoples
   {
        return $this->createQueryBuilder('c')
            ->andWhere('c.name = :name')
            ->setParameter('name', $name)
            ->getQuery()
            ->getOneOrNullResult()
        ;
   }

   public function findByKey($name, $firstname): ?Peoples
   {
       return $this->createQueryBuilder('c')
           ->andWhere('c.name = :name and c.firstname = :firstname  ')
           ->setParameter('name', $name)
           ->setParameter('firstname', $firstname)
           ->getQuery()
           ->getOneOrNullResult()
       ;
   }

   public function findJobs(): Array
   {
        return $this->createQueryBuilder('c')
            ->select('c.job')
            ->distinct()
            ->getQuery()
            ->getResult()
        ;
   }

    public function findEquips(): ?Peoples
    {
        return $this->createQueryBuilder('c')
            ->select('c.equip')
            ->distinct()
            ->getQuery()
            ->getResult()
        ;
    }

    public function findAgencies(): ?Peoples
    {
        return $this->createQueryBuilder('c')
            ->select('c.agency')
            ->distinct()
            ->getQuery()
            ->getResult()
        ;
    }

//    /**
//     * @return Peoples[] Returns an array of Peoples objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Peoples
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
