<?php

namespace App\Entity;

use App\Repository\PeoplesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="users", schema="trombiDB")
 */
#[ORM\Entity(repositoryClass: PeoplesRepository::class)]
class Peoples
{
    #[ORM\Id]
    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $firstname = null;

    #[ORM\Column(length: 255)]
    private ?string $job = null;

    #[ORM\Column(length: 255)]
    private ?string $equip = null;

    #[ORM\Column(length: 255)]
    private ?string $agency = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $photo_fun_url = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $photo_pro_url = null;

    public function toJson($people): Array
    {
        return [
            'name' => $people->getName(),
            'firstname' => $people->getFirstname(),
            'job' => $people->getJob(),
            'equip' => $people->getEquip(),
            'agency' => $people->getAgency(),
            'photo_fun_url' => $people->getPhotoFunUrl(),
            'photo_pro_url' => $people->getPhotoProUrl(),
        ];
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): static
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getJob(): ?string
    {
        return $this->job;
    }

    public function setJob(string $job): static
    {
        $this->job = $job;

        return $this;
    }

    public function getEquip(): ?string
    {
        return $this->equip;
    }

    public function setEquip(string $equip): static
    {
        $this->equip = $equip;

        return $this;
    }

    public function getAgency(): ?string
    {
        return $this->agency;
    }

    public function setAgency(string $agency): static
    {
        $this->agency = $agency;

        return $this;
    }

    public function getPhotoFunUrl(): ?string
    {
        return $this->photo_fun_url;
    }

    public function setPhotoFunUrl(?string $photo_fun_url): static
    {
        $this->photo_fun_url = $photo_fun_url;

        return $this;
    }

    public function getPhotoProUrl(): ?string
    {
        return $this->photo_pro_url;
    }

    public function setPhotoProUrl(?string $photo_pro_url): static
    {
        $this->photo_pro_url = $photo_pro_url;

        return $this;
    }
}
