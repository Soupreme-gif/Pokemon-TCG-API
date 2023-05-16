
class PokemonCard {

    static type = 'Pokemon';

    // this is used so that the SearchList component can figure out which card details to make based on which type it is
    get type(){
        return PokemonCard.type;
    }

   // gets the small parameter for the right image if applicable
    get smallImage(){
        return this.images?.small
    }
    // gets the large parameter for the right image if applicable
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

        // this method creates a version of the card's name by changing characters so that it matches the link on
       // the API's home website
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