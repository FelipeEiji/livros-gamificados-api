import { Hasher, Encrypter, HashComparer } from '@/data/protocols';

import faker from 'faker';

export class HasherSpy implements Hasher {
    digest = faker.datatype.uuid();
    plaintext: string;

    async hash(plaintext: string): Promise<string> {
        this.plaintext = plaintext;
        return this.digest;
    }
}

export class EncrypterSpy implements Encrypter {
    ciphertext = faker.datatype.uuid();
    plaintext: string;

    async encrypt(plaintext: string): Promise<string> {
        this.plaintext = plaintext;
        return this.ciphertext;
    }
}

export class HashComparerSpy implements HashComparer {
    plaintext: string;
    digest: string;
    isValid = true;

    async compare(plaintext: string, digest: string): Promise<boolean> {
        this.plaintext = plaintext;
        this.digest = digest;
        return this.isValid;
    }
}
