import React, {FC} from 'react';
import {HiOutlineHome, HiOutlineMapPin, HiOutlineCog8Tooth, HiOutlineCloud} from 'react-icons/hi2';
import CompanyTimeline from "@/components/CompanyTimeline/CompanyTimeline";

const CompanyTimeLine = [
    {
        year: 2000,
        title: "Ustanovitev podjetja",
        icon: <HiOutlineHome size={20}/>
    },
    {
        year: 2010,
        title: "Selitev podjetja",
        icon: <HiOutlineMapPin size={20}/>
    },
    {
        year: 2017,
        title: "Posodobitev strojne opreme",
        icon: <HiOutlineCog8Tooth size={20}/>
    },
    {
        year: 2021,
        title: "Posodobitev strojne opreme",
        icon: <HiOutlineCloud size={20}/>,
        present: true
    }]
const About:FC = () => {
    return (
        <div className="px-20 my-5">
            <h1 className="text-3xl font-bold mb-5">O nas</h1>
            <div className="flex flex-row flex-wrap justify-between">
                <div className="w-4/6 flex flex-col gap-5">
                    <p>
                        Kot družinsko podjetje stremimo h konstantnemu razvoju in prilagojevanju potrebam naših strank, kar zagotavljamo z neprenehnim investiranjem v strojni park ter ostale proizvodne in poslovne procese. Skrbimo za konkurenčnost na trgu, preciznost, visoko kakovost, široko paleto izdelkov, inovacije, tehnično podporo in fleksibilnost. Smo podjetje, ki se je pripravljeno soočati z novimi izzivi.
                    </p>
                    <p>
                        Naša osnovna dejavnost je serijska proizvodnja oz. obdelava visoko preciznih struženih izdelkov iz različnih materialov (železo, plastika, aluminij, legirano jeklo, medenina, …) za domače in tuje kupce iz različnih panog – avtomobilska industrija, industrija senzorjev, medicinska industrija, železniška industrija, prehrambna industrija, ograjna industrija idr.
                    </p>
                        V zadnjih dveh desetletjih si je podjetje z zagotavljanjem kakovosti pridobilo zaupanje tujih naročnikov na zahtevnem trgu (kar 90 % izvoza na tuji trg – Nemčija, Avstrija). Tudi v prihodnje bomo vlagali trud v razvoj in inovacije, da bi zadovoljili želje in potrebe svojih kupcev.
                    <p>
                        Naš strojni park je specializiran za s premerom 3–65mm. Obdelavo vseh materialov odlikujeta vrhunska preciznost in kakovost, da so v skladu s strogimi tehničnimi standardi.
                    </p>
                </div>
                <CompanyTimeline items={CompanyTimeLine} />
            </div>
        </div>
    );
};

export default About;