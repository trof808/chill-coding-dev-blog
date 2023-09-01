import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { TbExternalLink } from 'react-icons/tb';

const KrdBeerConfPage: React.FC = () => {
    return <main>
        <div className='p-2 flex flex-col gap-2'>
            <div className='bg-slate-100 rounded p-2 flex gap-2 relative'>
                <span className="font-['Press_Start_2P'] absolute z-10 text-xs right-0 bottom-0 origin-top-left -rotate-12 text-center">KRD.DEV<br />Beer Meetup</span>
                <StaticImage src='../images/avatar.png' alt='avatar' width={100} className='rounded' />
                <div className='flex flex-col'>
                    <span className='text-lg text-gray-700'>Trofimov Nikita</span>
                    <span className='text-sm'>Frontend Dev from Tinkoff</span>
                </div>
            </div>
            <a href='https://github.com/trof808/nvim-lua-frontend-config' target='_blank' className='flex justify-between items-center gap-2 p-2 bg-slate-300 rounded'>
                <div className='flex gap-2 items-center'>
                    <StaticImage src='../images/github.png' alt='avatar' width={40} className='rounded' />
                    <span>Moй Neovim config на github</span>
                </div>
                <div className='self-baseline'><TbExternalLink /></div>
            </a>
            <Link to='/nvim-useful-resources' className='flex justify-between items-center gap-2 p-2 bg-slate-300 rounded'>
                <div className='flex gap-2 items-center'>
                    <StaticImage src='../images/nvim.png' alt='avatar' width={40} className='rounded' />
                    <span>Полезные ресурсы по Neovim</span>
                </div>
            </Link>
            <a href='https://t.me/chillcoding' target='_blank' className='flex justify-between items-center gap-2 p-2 bg-slate-300 rounded'>
                <div className='flex gap-2 items-center'>
                    <StaticImage src='../images/telegram.webp' alt='avatar' width={40} className='rounded' />
                    <div className='flex flex-col'>
                        <span>My Dev Notes blog</span>
                        <span className='text-gray-500 text-xs'>Делюсь опытом и пишу заметки</span>
                    </div>
                </div>
                <div className='self-baseline'><TbExternalLink /></div>
            </a>
            <a href='https://www.youtube.com/channel/UCSjn9bVzcZY7_GU54n3ecAQ' target='_blank' className='flex justify-between items-center gap-2 p-2 bg-slate-300 rounded'>
                <div className='flex gap-2 items-center'>
                    <StaticImage src='../images/youtube.png' alt='avatar' width={40} className='rounded' />
                    <div className='flex flex-col'>
                        <span>Youtube channel</span>
                        <span className='text-gray-500 text-xs'>Говорю иногда об интересном</span>
                    </div>
                </div>
                <div className='self-baseline'><TbExternalLink /></div>
            </a>

        </div>
    </main>

}

export default KrdBeerConfPage;
