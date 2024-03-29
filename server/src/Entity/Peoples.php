<?php

namespace App\Entity;

use App\Repository\PeoplesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="peoples", schema="trombiDB")
 */
#[ORM\Entity(repositoryClass: PeoplesRepository::class)]
class Peoples
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    private ?int $id = null;

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

    public function toJson(): Array
    {
        return [
            "id" => $this->getId(),
            "name" => $this->getName(),
            "firstname" => $this->getFirstname(),
            "job" => $this->getJob(),
            "equip" => $this->getEquip(),
            "agency" => $this->getAgency(),
            "photo_pro_url" => $this->getPhoto("pro", $this->getPhotoProUrl()),
            "photo_fun_url" => $this->getPhoto("fun", $this->getPhotoFunUrl())
        ];
    }

    public function getPhoto(string $folder, ?string $link)
    {
        if ($link == null)
            return null;

        $path = "photo/" . $folder . "/" . $this->getName() . "_" . $this->getFirstname() . ".webp";
        $pathLink = "http://" . gethostbyname(gethostname()) . ":8080/" . $path;

        if (file_exists($path))
            return $pathLink;

        $this->genPhoto($link, $path);
        return $pathLink;
    }

    public function genPhoto(string $link, string $path) {
        ini_set("memory_limit", "-1");
        
        $percent = 0.2;

        $jpg = imagecreatefromjpeg($link);
        $w = imagesx($jpg);
        $h = imagesy($jpg);

        $webp = imagecreatetruecolor($w * $percent, $h * $percent);
        imagecopyresampled($webp, $jpg, 0, 0, 0, 0, $w * $percent, $h * $percent, $w, $h);
        imagewebp($webp, $path, 50);

        imagedestroy($jpg);
        imagedestroy($webp);
    }

    public function getId(): ?int
    {
        return $this->id;
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
