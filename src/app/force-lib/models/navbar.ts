export class Navbar{
    public id: string;
    public text: string;
    public routeLink?: string;
    public childrens?: Navbar[];

    public Navbar(){
        this.id = '';
        this.text = '';
        this.routeLink = '';
        this.childrens = [];
    }
}