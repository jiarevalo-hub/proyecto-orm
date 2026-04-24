import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private readonly prismaUsuario: PrismaService) {}
  
  
  
  create(createUsuarioDto: CreateUsuarioDto) {
    return this.prismaUsuario.user.create({data: createUsuarioDto});
  }


  findAll() {
    return this.prismaUsuario.user.findMany();
  }

  findOne(id: number) {
    return this.prismaUsuario.user.findUnique({
      where: { id },
    });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prismaUsuario.user.update({
      where: { id },
      data: updateUsuarioDto,
    });
  }

  remove(id: number) {
    return this.prismaUsuario.user.delete({
      where: { id },
    });
  }
}
