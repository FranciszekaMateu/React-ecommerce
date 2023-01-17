import React from "react";
import { Link } from "react-router-dom";
import "./itemMenu.css"
import { Accordion } from "react-bootstrap";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { ListGroup } from "react-bootstrap";

const itemMenu = () =>
{
    return (
        <div className="menu">
        <Accordion defaultActiveKey="0" className="acordion">
            <AccordionItem eventKey="1" className="item">
                <Accordion.Header><Link to={`/category/cpus`}><h4 className="enlace">Procesadores</h4></Link></Accordion.Header>
                <AccordionBody>
                    <ListGroup className="opciones">
                    <ListGroup.Item><Link className="enlace" to={`/category/cpus/amd`}><h4>AMD</h4></Link></ListGroup.Item>
                    <ListGroup.Item><Link className="enlace" to={`/category/cpus/intel`}><h4>Intel</h4></Link></ListGroup.Item>
                    </ListGroup>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem className="item">
                <Accordion.Header><Link className="enlace" to={`/category/perifericos`}><h4>Perifericos</h4></Link></Accordion.Header>
                <AccordionBody>
                    <ListGroup className="opciones">
                        <ListGroup.Item><Link className="enlace" to={`/category/perifericos/mouses`}><h4>Mouses</h4></Link></ListGroup.Item>
                        <ListGroup.Item><Link className="enlace" to={`/category/perifericos/teclados`}><h4>teclados</h4></Link></ListGroup.Item>
                    </ListGroup> 
                </AccordionBody>
            </AccordionItem>
            <AccordionItem className="item" eventKey="2">
                <Accordion.Header><Link className="enlace" to={`/category/gpus`}><h4>Tarjetas graficas</h4></Link></Accordion.Header>
                <AccordionBody>
                    <ListGroup className="opciones">
                        <ListGroup.Item><Link className="enlace" to={`/category/gpus/amd`}><h4>AMD</h4></Link></ListGroup.Item>
                        <ListGroup.Item><Link className="enlace" to={`/category/gpus/nvidia`}><h4>nvidia</h4></Link></ListGroup.Item>
                    </ListGroup> 
                </AccordionBody>           
            </AccordionItem>
            <AccordionItem className="item" eventKey="4">
                <Accordion.Header><Link className="enlace" to={`/category/moth`}><h4>Placas madre</h4></Link></Accordion.Header>
                <AccordionBody> 
                    <ListGroup className="opciones">
                        <ListGroup.Item><Link className="enlace" to={`/category/moth/amd`}><h4>Amd</h4></Link></ListGroup.Item>
                        <ListGroup.Item><Link className="enlace" to={`/category/moth/intel`}><h4>Intel</h4></Link></ListGroup.Item>
                    </ListGroup> 
                </AccordionBody>
            </AccordionItem>
            <AccordionItem className="item" eventKey="5">
                <Accordion.Header><Link className="enlace" to={`/category/harddrive`}><h4 className="funcionando">Almacenamiento</h4></Link></Accordion.Header>
                <AccordionBody>
                    <ListGroup className="opciones">
                        <ListGroup.Item><Link className="enlace" to={`/category/hard/hdd`}><h4>Discos duro</h4></Link></ListGroup.Item>
                        <ListGroup.Item><Link className="enlace" to={`/category/hard/ssd`}><h4>Discos duro solido</h4></Link></ListGroup.Item>
                    </ListGroup>  
                </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="6" className="item">
            <Accordion.Header><Link className="enlace" to={`/category/psu`}><h4 className="funcionando">Fuentes de poder</h4></Link></Accordion.Header>
            </AccordionItem>
            <AccordionItem eventKey="7" className="item">
            <Accordion.Header><Link className="enlace" to={`/category/rams`}><h4 className="funcionando">Memorias ram</h4></Link></Accordion.Header>
                <AccordionBody> 
                        <ListGroup.Item><Link className="enlace" to={`/category/rams/ddr3`}><h4>Memorias ddr3</h4></Link></ListGroup.Item>
                        <ListGroup.Item><Link className="enlace" to={`/category/rams/ddr4`}><h4>Memorias ddr4</h4></Link></ListGroup.Item>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    </div>
    )
}
export default itemMenu


