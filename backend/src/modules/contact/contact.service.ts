import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

const data = {
  email: 'correo@mail.com',
  whatsapp: '123456789',
  gitHubUrl: 'https://github.com/user/repo',
  demoUrl: 'https://demo.com',
};

@Injectable()
export class ContactService {
  create(createContactDto: CreateContactDto) {
    return 'This action adds a new contact';
  }

  getData() {
    return data;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
