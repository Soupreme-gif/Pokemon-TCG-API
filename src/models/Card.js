
class PokemonCard {

    static type = 'Pokemon';

    get type(){
        return PokemonCard.type;
    }

    get smallImage(){
        return this.images?.small
    }

    get largeImage() {
        return this.images?.large
    }

        id = '';
        name = '';
        supertype = '';
        subtypes = [];
        images = {
            small: '',
            large: '',
        }

        // this is a field that exists to be used inside of the modal for every card and be able to lead to the card
        // on the website that will be linked to this
        nameForLink = '';

        get linkName()
        {
            this.nameForLink = this.name

            if(this.nameForLink.includes('.'))
            {
                this.nameForLink = this.nameForLink.replace('.','-')
            }

            if(this.nameForLink.includes("'"))
            {
                this.nameForLink = this.nameForLink.replace("'",'-')
            }

            if(this.nameForLink.includes(" & "))
            {
                this.nameForLink = this.nameForLink.replace(" & ",'-')
            }

            if(this.nameForLink.includes(" δ"))
            {
                this.nameForLink = this.nameForLink.replace(" δ",'')
            }

            if(this.nameForLink.includes(" ◇"))
            {
                this.nameForLink = this.nameForLink.replace(" ◇",'')
            }

            if(this.nameForLink.includes(" ★"))
            {
                this.nameForLink = this.nameForLink.replace(" ★",'')
            }

            if(this.nameForLink.includes(' '))
            {
                this.nameForLink = this.nameForLink.replace(' ','-')
            }

            this.nameForLink = this.nameForLink.toLowerCase()

            console.log(this.nameForLink)


            return this.nameForLink

        }
}

class TrainerCard {

    static type = 'Trainer';
    get type(){
        return TrainerCard.type;
    }

    get largeImage() {
        return this.images?.large
    }

    id = '';
    name = '';
    supertype = '';
    subtypes = [];
    images = {
        small: '',
        large: '',
    }

    // this is a field that exists to be used inside of the modal for every card and be able to lead to the card
    // on the website that will be linked to this
    nameForLink = '';

    get smallImage(){
        return this.images?.small
    }

    get linkName()
    {
        this.nameForLink = this.name

        if(this.nameForLink.includes('.'))
        {
            this.nameForLink = this.nameForLink.replace('.','-')
        }

        if(this.nameForLink.includes("'"))
        {
            this.nameForLink = this.nameForLink.replace("'",'-')
        }

        if(this.nameForLink.includes(" & "))
        {
            this.nameForLink = this.nameForLink.replace(" & ",'-')
        }

        if(this.nameForLink.includes(" δ"))
        {
            this.nameForLink = this.nameForLink.replace(" δ",'')
        }

        if(this.nameForLink.includes(" ◇"))
        {
            this.nameForLink = this.nameForLink.replace(" ◇",'')
        }

        if(this.nameForLink.includes(" ★"))
        {
            this.nameForLink = this.nameForLink.replace(" ★",'')
        }

        if(this.nameForLink.includes(' '))
        {
            this.nameForLink = this.nameForLink.replace(' ','-')
        }

        this.nameForLink = this.nameForLink.toLowerCase()


        return this.nameForLink

    }

}

class EnergyCard {

    static type = 'Energy';
    get type(){
        return EnergyCard.type;
    }

    get largeImage() {
        return this.images?.large
    }

    id = '';
    name = '';
    supertype = '';
    subtypes = [];
    images = {
        small: '',
        large: '',
    }

    // this is a field that exists to be used inside of the modal for every card and be able to lead to the card
    // on the website that will be linked to this
    nameForLink = '';

    get smallImage(){
        return this.images?.small
    }

    get linkName()
    {
        this.nameForLink = this.name

        if(this.nameForLink.includes('.'))
        {
            this.nameForLink = this.nameForLink.replace('.','-')
        }

        if(this.nameForLink.includes("'"))
        {
            this.nameForLink = this.nameForLink.replace("'",'-')
        }

        if(this.nameForLink.includes(" & "))
        {
            this.nameForLink = this.nameForLink.replace(" & ",'-')
        }

        if(this.nameForLink.includes(" δ"))
        {
            this.nameForLink = this.nameForLink.replace(" δ",'')
        }

        if(this.nameForLink.includes(" ◇"))
        {
            this.nameForLink = this.nameForLink.replace(" ◇",'')
        }

        if(this.nameForLink.includes(" ★"))
        {
            this.nameForLink = this.nameForLink.replace(" ★",'')
        }

        if(this.nameForLink.includes(' '))
        {
            this.nameForLink = this.nameForLink.replace(' ','-')
        }

        this.nameForLink = this.nameForLink.toLowerCase()


        return this.nameForLink

    }
}

export {PokemonCard, TrainerCard, EnergyCard};